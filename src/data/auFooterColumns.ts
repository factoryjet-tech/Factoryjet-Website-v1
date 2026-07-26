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
export const AU_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design',               href: '/services/web-design' },
      { label: 'Website Development',      href: '/services/web-application-development' },
      { label: 'Ecommerce Web Design',     href: '/services/ecommerce-development' },
      { label: 'Shopify Developers',       href: '/services/shopify-development' },
      { label: 'SEO Services',             href: '/services/seo' },
      { label: 'AI SEO & AI Agents',       href: '/services/ai-agents' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Case Studies',             href: '/case-studies' },
      { label: 'Blog',                     href: '/blog' },
      { label: 'FAQ',                      href: '/au#faq' },
      { label: 'WhatsApp Us',              href: 'https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20Australian%20business.' },
      { label: 'connect@factoryjet.com',   href: 'mailto:connect@factoryjet.com' },
    ],
  },
];
