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
// 2026-09-26: AU wave 4 adds 5 /au pages and a fifth column for the 6 Australian guides
// (SiteFooter switches to lg:grid-cols-5 when it gets five columns).
// 2026-09-26: AU wave 5 adds 8 /au pages (4 to each of the first two columns).
export const AU_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'E-Commerce & Web',
    links: [
      { label: 'Ecommerce Development',    href: '/au/ecommerce-development' },
      { label: 'Shopify Development',      href: '/au/shopify-development' },
      { label: 'Ecommerce SEO',            href: '/au/ecommerce-seo' },
      { label: 'Web Design Australia',     href: '/au#web-design' },
      { label: 'Small Business Web Design', href: '/au/small-business-web-design' },
      { label: 'Websites for Tradies',     href: '/au/websites-for-tradies' },
      { label: 'Dental Website Design',    href: '/au/dental-website-design' },
      { label: 'NDIS Website Design',      href: '/au/ndis-website-design' },
      { label: 'Real Estate Websites',     href: '/au/real-estate-websites' },
      { label: 'Accountant Website Design', href: '/au/accountant-website-design' },
      { label: 'Website Maintenance',      href: '/au/website-maintenance' },
    ],
  },
  {
    heading: 'AI & Search',
    links: [
      { label: 'AI Agents & Automation',   href: '/au/ai-agents' },
      { label: 'AI Development',           href: '/au/ai-development' },
      { label: 'AI Consulting',            href: '/au/ai-consulting' },
      { label: 'AI Receptionist',          href: '/au/ai-receptionist' },
      { label: 'AI Customer Service',      href: '/au/ai-customer-service' },
      { label: 'Accounts Payable Automation', href: '/au/accounts-payable-automation' },
      { label: 'AI SEO & GEO',             href: '/au/ai-seo' },
      { label: 'SEO Services',             href: '/au/seo' },
      { label: 'Local SEO',                href: '/au/local-seo' },
      { label: 'Small Business SEO',       href: '/au/small-business-seo' },
      { label: 'Law Firm SEO',             href: '/au/law-firm-seo' },
    ],
  },
  {
    heading: 'Australian Guides',
    links: [
      { label: 'Website Cost Guide',       href: '/blog/website-cost-australia-2026' },
      { label: 'SEO Cost Guide',           href: '/blog/seo-cost-australia-2026' },
      { label: 'AI Cost Guide',            href: '/blog/ai-cost-australia-2026' },
      { label: 'Shopify Cost Guide',       href: '/blog/shopify-cost-australia-2026' },
      { label: 'Ecommerce Platform Guide', href: '/blog/best-ecommerce-platform-australia-2026' },
      { label: 'Compare AI Agencies',      href: '/blog/best-ai-agencies-australia-2026' },
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
