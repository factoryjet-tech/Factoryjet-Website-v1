/**
 * ONE breadcrumb array for /uk/manchester.
 *
 * The visible <Breadcrumbs> trail and the BreadcrumbList JSON-LD are both built
 * from this array, so the two can never drift. Do not hand-copy a second list
 * next to the ld+json block: that is the exact silent-drift bug this file exists
 * to prevent.
 */
export const CANONICAL = 'https://factoryjet.com/uk/manchester';

export const crumbs = [
  { name: 'FactoryJet', url: 'https://factoryjet.com' },
  { name: 'UK', url: 'https://factoryjet.com/uk' },
  { name: 'Manchester', url: CANONICAL },
];

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
};
