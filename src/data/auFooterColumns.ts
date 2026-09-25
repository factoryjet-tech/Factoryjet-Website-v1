import type { SiteFooterColumn } from '@/components/v2/SiteFooter';

/**
 * AU-locale footer link columns. Added 2026-06-11 with the AU market launch.
 *
 * Pass these as `linkColumns` to <SiteFooter> on every /au/* page so that
 * footer links resolve to /au/* routes instead of the bare-path defaults
 * (which resolve to the India/global locale).
 *
 * NOTE (corrected 2026-07-26): this file previously pointed at /au/services/* and
 * /au/{city} URLs as a forward "contract" for pages on the AU roadmap. Those pages
 * were never built, so every link in the Services and Locations columns was a hard
 * 404 on every AU page. Links now resolve to the real service pages. When the AU
 * routes ship, repoint these back.
 *
 * Usage:
 *   import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
 *   <SiteFooter linkColumns={AU_FOOTER_COLUMNS} />
 */
// 2026-09-25: repointed at the AU build (7 new /au pages + the /au hub).
// Every link below is an AU page or a shared non-US page; keep it that way.
export const AU_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'E-Commerce & Web',
    links: [
      { label: 'Ecommerce Development',    href: '/au/ecommerce-development' },
      { label: 'Shopify Development',      href: '/au/shopify-development' },
      { label: 'Web Design Australia',     href: '/au#web-design' },
      { label: 'Website Cost',             href: '/au#website-cost' },
    ],
  },
  {
    heading: 'AI & Search',
    links: [
      { label: 'AI Agents & Automation',   href: '/au/ai-agents' },
      { label: 'AI Development',           href: '/au/ai-development' },
      { label: 'AI Consulting',            href: '/au/ai-consulting' },
      { label: 'AI Receptionist',          href: '/au/ai-receptionist' },
      { label: 'AI SEO & GEO',             href: '/au/ai-seo' },
      { label: 'SEO Services',             href: '/au/seo' },
    ],
  },
  {
    heading: 'Australia',
    links: [
      { label: 'FactoryJet Australia',     href: '/au' },
      { label: 'Melbourne',                href: '/au/melbourne' },
      { label: 'Brisbane',                 href: '/au/brisbane' },
      { label: 'Adelaide',                 href: '/au/adelaide' },
      { label: 'Canberra',                 href: '/au/canberra' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',                    href: '/about' },
      { label: 'Case Studies',             href: '/case-studies' },
      { label: 'Blog',                     href: '/blog' },
      { label: 'Contact',                  href: '/contact' },
      { label: 'WhatsApp Us',              href: 'https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20working%20with%20you%20on%20my%20Australian%20business.' },
    ],
  },
];
