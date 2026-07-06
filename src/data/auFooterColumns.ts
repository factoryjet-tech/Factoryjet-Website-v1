import type { SiteFooterColumn } from '@/components/v2/SiteFooter';

/**
 * AU-locale footer link columns. Added 2026-06-11 with the AU market launch.
 *
 * Pass these as `linkColumns` to <SiteFooter> on every /au/* page so that
 * footer links resolve to /au/* routes instead of the bare-path defaults
 * (which resolve to the India/global locale).
 *
 * NOTE: the /au/services/* and /au/{city} pages are the next items on the
 * AU roadmap — these hrefs define the URL contract for those builds.
 *
 * Usage:
 *   import { AU_FOOTER_COLUMNS } from '@/data/auFooterColumns';
 *   <SiteFooter linkColumns={AU_FOOTER_COLUMNS} />
 */
export const AU_FOOTER_COLUMNS: ReadonlyArray<SiteFooterColumn> = [
  {
    heading: 'Services',
    links: [
      { label: 'Web Design Australia',     href: '/au/services/web-design' },
      { label: 'Website Development',      href: '/au/services/website-development' },
      { label: 'Ecommerce Web Design',     href: '/au/services/ecommerce' },
      { label: 'Shopify Developers',       href: '/au/services/shopify' },
      { label: 'SEO Services Australia',   href: '/au/services/seo' },
      { label: 'AI SEO & AI Agents',       href: '/au/services/ai' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'Web Design Sydney',        href: '/au/sydney' },
      { label: 'Web Design Melbourne',     href: '/au/melbourne' },
      { label: 'Web Design Brisbane',      href: '/au/brisbane' },
      { label: 'Web Design Perth',         href: '/au/perth' },
      { label: 'Web Design Adelaide',      href: '/au/adelaide' },
      { label: 'Web Design Gold Coast',    href: '/au/gold-coast' },
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
