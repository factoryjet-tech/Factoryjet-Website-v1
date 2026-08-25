/**
 * The five delivery steps, in one place.
 *
 * Lives in its own module, not inside ProcessTimeline.tsx, because that file is
 * a "use client" module. A server component cannot read a plain export out of a
 * client module: React hands it a client reference and dotting into it throws.
 * layout.tsx builds the HowTo JSON-LD from this array and ProcessTimeline.tsx
 * renders it, so the schema and the visible steps stay identical by construction.
 */
export interface ProcessStep {
  days: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const STEPS: ProcessStep[] = [
  {
    days: "DAYS 1 TO 2",
    title: "Discovery and conversion mapping",
    description:
      "We audit what you have now, map how a Manchester customer gets from a search to an enquiry, and check which terms local rivals already hold.",
    deliverables: ["A written brief you keep", "An agreed list of target terms"],
  },
  {
    days: "DAYS 3 TO 5",
    title: "Content architecture and SEO engineering",
    description:
      "Every page gets a job. We write the copy, set the heading order, draft the FAQ content, and plan which page links to which.",
    deliverables: ["Page-by-page content plan", "Internal linking map"],
  },
  {
    days: "DAYS 6 TO 10",
    title: "Design in code, not in Figma",
    description:
      "Each section is built as a real component with responsive breakpoints and restrained motion. You review the actual site on a staging URL, not a flat mockup.",
    deliverables: ["Staging URL you can share", "Two rounds of revisions"],
  },
  {
    days: "DAYS 11 TO 18",
    title: "Build, testing and performance tuning",
    description:
      "Full build in Next.js 15 with Tailwind CSS 4. Schema, sitemap, robots and Core Web Vitals work happen here, then we test on real phones as well as desktop browsers.",
    deliverables: ["Cross-browser test pass", "Lighthouse 90+ before launch"],
  },
  {
    days: "DAY 19 ONWARDS",
    title: "Launch, indexing and 90-day support",
    description:
      "We deploy to your domain, submit to Google Search Console, wire up analytics and watch indexing settle. Support for the first 90 days is included, not invoiced.",
    deliverables: ["Search Console and analytics access", "90 days of fixes included"],
  },
];
