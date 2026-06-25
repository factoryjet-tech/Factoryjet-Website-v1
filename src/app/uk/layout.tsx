import type { Viewport } from "next";
import { ukMetadata, ukViewport } from "./metadata";
import SiteHeader from '@/components/v2/SiteHeader';
import SiteFooter from '@/components/v2/SiteFooter';

export const metadata = ukMetadata;
export const viewport: Viewport = ukViewport;

// UK-locale footer columns — Services / Company / Locations (UK cities).
// Mirrors the /dev/v2-foundation showcase pattern exactly.
const UK_FOOTER_LINK_COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'E-Commerce', href: '/services/ecommerce-development' },
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'AI SEO (GEO/AEO)', href: '/services/ai-seo' },
      { label: 'Shopify Development', href: '/services/shopify-development' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'London', href: '/uk/london' },
      { label: 'Manchester', href: '/uk/manchester' },
      { label: 'Birmingham', href: '/uk/birmingham' },
      { label: 'Leeds', href: '/uk/leeds' },
      { label: 'Edinburgh', href: '/uk/edinburgh' },
    ],
  },
] as const;

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />

      {/* LCP preload (v1 hero-uk.webp) — kept to avoid regression on v1 UK pages
          still in service; remove once v2 UK homepage ships (no static hero image). */}
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/images/uk/hero-uk.webp"
        fetchPriority="high"
      />

      {/* JetBrains Mono (v1 TechStack component) — v2 uses Geist Mono via root layout;
          remove once all v1 UK pages are retired. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
      />

      {/* Skip-link style (v1 Header artifact) — .uk-skip-link unused by v2 SiteHeader;
          remove alongside the two links above in the v1 retirement patch. */}
      <style>{`
        .uk-skip-link {
          position: absolute;
          top: -40px;
          left: 0;
          background: #F05A28;
          color: #FFFFFF;
          padding: 8px 16px;
          text-decoration: none;
          z-index: 100;
          font-size: 14px;
          font-weight: 500;
        }
        .uk-skip-link:focus {
          top: 0;
        }
      `}</style>

      {children}

      <SiteFooter linkColumns={UK_FOOTER_LINK_COLUMNS} />
    </>
  );
}
