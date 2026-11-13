/**
 * Client list, one source for every client strip (13 Nov 2026).
 *
 * Feeds LogoBar (placed on 83 pages) and ClientLogoStrip (top of UsSiteFooter).
 * Names, sites and work types are exactly as Bhavesh approved them on 13 Nov 2026.
 *
 * Rules that apply to every entry:
 *   - Only clients cleared to be named on any page (memory note
 *     factoryjet-client-naming-permission).
 *   - No metrics, no sizes, no outcomes next to a name.
 *   - GPSUK is a Commerceflo store, Sow Easy is WooCommerce + Odoo and Mannik is
 *     WooCommerce. Never describe any of the three as Shopify work.
 *
 * Logos: drop an approved file at public/clients/<slug>.svg (or .png) and run
 * `node scripts/sync-client-logos.mjs` (prebuild runs it too). The strip then
 * shows the image; without a file it shows a monochrome text wordmark.
 */
import { CLIENT_LOGO_FILES } from './clientLogoFiles';

export interface Client {
  /** File name stem under public/clients/. */
  slug: string;
  /** Public name, as shown. */
  name: string;
  /** The client's own site. Reference only; the strip does not link out. */
  site?: string;
  /** What we did, for internal use. Not rendered in the strip. */
  work?: string;
  /** Our case study, when one is live. The strip links the name to it. */
  caseStudy?: string;
}

export const CLIENTS: ReadonlyArray<Client> = [
  { slug: 'exaco', name: 'Exaco', site: 'https://europeangarden.com', work: 'Shopify (European Garden)' },
  { slug: 'gpsuk', name: 'GPSUK', work: 'Commerceflo store', caseStudy: '/case-studies/gpsuk-promotional-products' },
  { slug: 'sow-easy', name: 'Sow Easy', work: 'WooCommerce + Odoo', caseStudy: '/case-studies/sow-easy-distributor-portal' },
  { slug: 'dtf-virginia', name: 'DTF Virginia', site: 'https://dtfvirginia.com', work: 'Shopify' },
  { slug: 'mannik', name: 'Mannik', site: 'https://mannik.co.uk', work: 'WooCommerce' },
  { slug: 'shop-holistico', name: 'Shop Holistico', site: 'https://shopholistico.com', work: 'Shopify', caseStudy: '/case-studies/shopholistico-shopify-store' },
  { slug: 'consult-holistico', name: 'Consult Holistico', site: 'https://consultholistico.com' },
  { slug: 'belle-maison', name: 'Belle Maison', site: 'https://bellemaison.in', caseStudy: '/case-studies/belle-maison-ecommerce-success' },
  { slug: 'mue-wholesale', name: 'MUE Wholesale', site: 'https://muewholesale.com', work: 'MakeUp Eraser wholesale' },
  { slug: 'washington-law-group', name: 'Washington Law Group', work: 'AI agent development', caseStudy: '/case-studies/washington-law-group-accident-detection-agent' },
];

/** Public path of the client's logo file, or undefined when none is in public/clients/. */
export function clientLogoSrc(slug: string): string | undefined {
  const file = CLIENT_LOGO_FILES.find((f) => f === `${slug}.svg`) ?? CLIENT_LOGO_FILES.find((f) => f === `${slug}.png`);
  return file ? `/clients/${file}` : undefined;
}
