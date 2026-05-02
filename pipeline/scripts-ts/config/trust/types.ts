/**
 * Trust artifact data architecture per
 * factoryjet_modern_agency_design_spec_v1.md §7.
 *
 * These types are the canonical shape for clients.json,
 * testimonials.json, and case-studies.json. The pipeline
 * reads from these JSON files; never invents data.
 */

export interface Client {
  /** url-safe id, e.g. "hartwell-co" */
  slug: string;
  name: string;
  /** canonical taxonomy: 'financial-services' | 'hospitality' | 'property' | 'legal' | 'healthcare' | 'creative' | etc. */
  industry: string;
  /** path to logo SVG, relative to /public, e.g. "/clients/hartwell-co.svg" */
  logoSvgPath: string;
  websiteUrl: string;
  /** FK to case-studies.json, optional */
  caseStudySlug?: string;
  /** Hard gate: only entries with 'granted' may be rendered */
  displayPermission: 'granted' | 'pending' | 'declined';
  /** for city-relevance filtering, e.g. ["london", "manchester"] */
  citiesServed: string[];
  /** whether this client appears in homepage logo strip */
  featuredOnHomepage: boolean;
}

export interface Testimonial {
  slug: string;
  /** FK to clients.json */
  clientSlug: string;
  name: string;
  role: string;
  /** path to headshot WebP, or empty string for initials fallback */
  headshotPath: string;
  /** markdown, 25-50 words, with **metric** markers for bold-blue emphasis */
  quote: string;
  /** structured form of the metric, e.g. "47% increase in qualified leads" */
  outcomeMetric: string;
  permissionStatus: 'granted' | 'pending' | 'declined';
  /** which service pages can surface this testimonial */
  serviceVariants: string[];
}

export interface CaseStudy {
  slug: string;
  /** FK to clients.json */
  clientSlug: string;
  industry: string;
  /** for case study tiles, e.g. "Rebuilt site drove 47% lift in qualified leads in Q1" */
  oneLineOutcome: string;
  /** for full case study page (not in M1.5 scope) */
  challenge: string;
  solution: string;
  before: Array<{ metric: string; value: string }>;
  after: Array<{ metric: string; value: string }>;
  /** the headline outcome for tile display */
  primaryMetric: string;
  servicesPerformed: string[];
  /** e.g. "31 days" */
  duration: string;
  permissionStatus: 'granted' | 'pending';
}

/**
 * Read helpers — Stage 5 VALIDATE will use these to enforce
 * the "only render granted artifacts" rule.
 */
export type GrantedClient = Client & { displayPermission: 'granted' };
export type GrantedTestimonial = Testimonial & { permissionStatus: 'granted' };
export type GrantedCaseStudy = CaseStudy & { permissionStatus: 'granted' };

export function isGrantedClient(c: Client): c is GrantedClient {
  return c.displayPermission === 'granted';
}
export function isGrantedTestimonial(t: Testimonial): t is GrantedTestimonial {
  return t.permissionStatus === 'granted';
}
export function isGrantedCaseStudy(cs: CaseStudy): cs is GrantedCaseStudy {
  return cs.permissionStatus === 'granted';
}
