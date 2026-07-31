/**
 * Canonical list of India web-design city pages.
 *
 * Single source of truth for both the /web-design hub's "city by city" block
 * and WebDesignCityLinksIN (rendered on each city page). Previously this list
 * lived inline in the hub only, so adding a city meant editing two places.
 *
 * Canonical route is /web-design/[slug], no trailing slash
 * (next.config.mjs sets trailingSlash: false).
 */
export const IN_WEB_DESIGN_CITIES: ReadonlyArray<{ slug: string; name: string }> = [
  { slug: 'ahmedabad', name: 'Ahmedabad' },
  { slug: 'bangalore', name: 'Bangalore' },
  { slug: 'bhubaneswar', name: 'Bhubaneswar' },
  { slug: 'chennai', name: 'Chennai' },
  { slug: 'coimbatore', name: 'Coimbatore' },
  { slug: 'delhi', name: 'Delhi' },
  { slug: 'gurgaon', name: 'Gurgaon' },
  { slug: 'hyderabad', name: 'Hyderabad' },
  { slug: 'indore', name: 'Indore' },
  { slug: 'jaipur', name: 'Jaipur' },
  { slug: 'kochi', name: 'Kochi' },
  { slug: 'kolkata', name: 'Kolkata' },
  { slug: 'madurai', name: 'Madurai' },
  { slug: 'mumbai', name: 'Mumbai' },
  { slug: 'nagpur', name: 'Nagpur' },
  { slug: 'noida', name: 'Noida' },
  { slug: 'pune', name: 'Pune' },
  { slug: 'rajkot', name: 'Rajkot' },
  { slug: 'surat', name: 'Surat' },
  { slug: 'thiruvananthapuram', name: 'Thiruvananthapuram' },
  { slug: 'vadodara', name: 'Vadodara' },
  { slug: 'visakhapatnam', name: 'Visakhapatnam' },
];
