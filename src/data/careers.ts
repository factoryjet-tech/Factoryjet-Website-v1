/**
 * Careers content and settings. Spec: docs/HIRING-PIPELINE-SPEC.md.
 *
 * The careers pages are noindex and kept out of every sitemap, menu and llms.txt.
 * They state the Bangalore office, which commercial pages never do.
 *
 * PLACEHOLDERS Bhavesh still has to decide (spec section 10). Each one renders
 * safely as it is, so a deploy before they are filled shows nothing broken:
 *   INCENTIVE_UP_TO   null: the page says "plus a quarterly performance incentive"
 *                     with no amount. Set a number (rupees per quarter) to show it.
 *   CAREERS_EMAIL     careers@factoryjet.com does not exist yet. It is shown in the
 *                     consent text for deletion requests. Create the inbox or alias
 *                     before go-live, or change this to an address that exists.
 *   RETENTION_DAYS    180 proposed. Must match DEFAULT_RETENTION_DAYS (or the
 *                     CAREERS_RETENTION_DAYS variable) in functions/api/job-application.js.
 */

export const INCENTIVE_UP_TO: number | null = null; // PLACEHOLDER
export const CAREERS_EMAIL = 'careers@factoryjet.com'; // PLACEHOLDER, inbox not created yet
export const RETENTION_DAYS = 180; // PLACEHOLDER

/** Bump together with CONSENT_VERSION in functions/api/job-application.js when the text changes. */
export const CONSENT_TEXT =
  `I agree that FactoryJet can store and review my application, including my CV, to assess me for this role. ` +
  `An AI tool helps sort applications; a person makes every decision. FactoryJet keeps my data for ` +
  `${RETENTION_DAYS} days after the role is filled, then deletes it. I can ask for it to be deleted sooner by ` +
  `emailing ${CAREERS_EMAIL}.`;

export interface CareerRole {
  slug: string;
  title: string;
  /** Shown after the title, e.g. on LinkedIn: "(GTM)". */
  tag: string;
  location: string;
  type: string;
  salary: string;
  summary: string;
  intro: string[];
  work: string[];
  week: string[];
  mustHave: { need: string; check: string }[];
  goodToHave: string[];
  details: string[];
}

function salaryLine(): string {
  const base = '₹30,000 to ₹35,000 per month';
  if (INCENTIVE_UP_TO === null) return `${base}, plus a quarterly performance incentive`;
  return `${base}, plus a quarterly performance incentive of up to ₹${INCENTIVE_UP_TO.toLocaleString('en-IN')}`;
}

export const ROLES: CareerRole[] = [
  {
    slug: 'ai-search-growth-specialist',
    title: 'AI Search & Growth Specialist',
    tag: 'GTM',
    location: 'Bangalore (Whitefield), on-site 5 days a week',
    type: 'Full-time',
    salary: salaryLine(),
    summary:
      'Deliver AI search, SEO, AI agent and e-commerce work for clients in the US, UK, Europe, Canada and Australia, and help us win more of it. You work directly with the founder.',
    intro: [
      'FactoryJet builds AI agents, e-commerce stores and AI search programs for businesses in the US, UK, Europe, Canada and Australia. More than 500 businesses have worked with us.',
      'Most of our work sits in three places. AI search and SEO: getting clients named when buyers ask ChatGPT, Perplexity or Google’s AI answers. AI agents and agentic systems: agents that quote, answer, qualify leads or run tasks for a business. E-commerce: Shopify and WooCommerce stores.',
      'This role works directly with the founder. You will deliver this work for clients and help us win more of it, especially AI agent projects from overseas clients.',
    ],
    work: [
      'Run AI visibility checks: ask AI assistants the questions a client’s buyers ask, record who gets named, and find out why it is not the client.',
      'Find and fix SEO problems on client stores: indexing, schema, page structure, product and category pages.',
      'Help scope and demo AI agents. Turn a prospect’s problem into a short agent spec, build quick demos with Claude Code or Codex, and test them before a client sees them.',
      'Research prospects in the US, UK, Europe, Canada and Australia, and prepare the audit or demo that opens the conversation.',
      'Write client updates, audit summaries and outreach in clear English that a US client reads once and understands.',
      'Review pages and stores before they ship. Spot what looks off and fix small things yourself.',
    ],
    week: [
      'Monday: an AI visibility check for a Shopify brand, 40 buyer questions across ChatGPT and Perplexity.',
      'Tuesday: a schema and indexing fix on a WooCommerce store, shipped with Claude Code and checked live.',
      'Wednesday: a one-page agent spec and a working demo for a UK prospect.',
      'Thursday: a design review of a new landing page before the client sees it.',
      'Friday: the client update that explains what changed and what is next.',
    ],
    mustHave: [
      {
        need: 'You use Claude Code, Codex or a similar AI coding tool every day.',
        check: 'In your application, link to one thing you built or fixed with it and say what the AI did and what you did.',
      },
      {
        need: 'Clear spoken and written English, good enough for US and UK clients without anyone editing your work.',
        check: 'Your 150-word note is the writing test. Shortlisted people also record a short video answer.',
      },
      {
        need: 'An eye for design. You can look at a page or store and say exactly what is wrong with it.',
        check: 'The online assessment includes a design question.',
      },
      {
        need: '1.5 to 3 years of hands-on work in SEO, e-commerce or digital marketing.',
        check: 'Show it with a live link and the change you made.',
      },
      {
        need: 'You can work from our office near Kundalahalli, ITPL Road, 5 days a week.',
        check: 'The form asks. This is not a remote or hybrid role.',
      },
    ],
    goodToHave: [
      'Shopify or WooCommerce admin experience',
      'Google Search Console and GA4',
      'Basic HTML',
      'An interest in how AI agents are built and where they fail',
    ],
    details: [
      'Location: our office near Kundalahalli, ITPL Road, Whitefield, Bangalore. On-site 5 days a week.',
      `Salary: ${salaryLine()}.`,
      'You report directly to the founder.',
      'Hiring steps: application, a 45-minute online assessment, a take-home task, an interview, then a trial day in the office.',
    ],
  },
];

export function roleBySlug(slug: string): CareerRole | undefined {
  return ROLES.find((r) => r.slug === slug);
}
