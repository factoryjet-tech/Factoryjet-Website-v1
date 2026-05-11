/**
 * FactoryJet Homepage v3 — local preview only
 *
 * Preview at: http://localhost:3000/us/homepage-v3
 * NOT linked from any live page. Safe to iterate here freely.
 */

import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';
import HomepageHeroV3 from '@/components/v2/HomepageHeroV3';

export const metadata = {
  title: '[PREVIEW] Homepage v3 — FactoryJet',
  robots: { index: false, follow: false },
};

export default function HomepageV3() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomepageHeroV3 />
        {/* Sections 2–8 will be added here one by one */}
      </main>
      <SiteFooter />
    </>
  );
}
