/**
 * TestimonialsSection — v2.1 verified client work block.
 *
 * Replaced fabricated testimonials with real, verifiable project cards.
 * Each card links to a live site visitors can inspect themselves.
 * No invented quotes, no fake review counts.
 *
 * Pure server component.
 */

export interface TestimonialsSectionProps {
  eyebrow?: string;
  headline?: string;
}

interface ProjectCard {
  client: string;
  url: string;
  href: string;
  industry: string;
  built: string;
  highlight?: string;
}

const PROJECTS: ProjectCard[] = [
  {
    client: 'WetStone Labs',
    url: 'wetstonelabs.com',
    href: 'https://www.wetstonelabs.com/',
    industry: 'Cybersecurity · Digital Forensics',
    built: 'Enterprise product website',
    highlight: 'US Client',
  },
  {
    client: 'CuraShield',
    url: 'curashield-design-system.pages.dev',
    href: 'https://curashield-design-system.pages.dev/',
    industry: 'Healthcare Security · SaaS',
    built: 'Design system + marketing site',
  },
  {
    client: 'MindSource',
    url: 'mindsource.com',
    href: 'https://mindsource.com/',
    industry: 'AI & Data Analytics · Consulting',
    built: 'Corporate website',
  },
  {
    client: 'StegoHunt',
    url: 'stegohuntapp.pages.dev',
    href: 'https://stegohuntapp.pages.dev/',
    industry: 'Security Software · SaaS',
    built: 'Website + React Native mobile app',
  },
  {
    client: 'VidAML',
    url: 'vidamltest.pages.dev',
    href: 'https://vidamltest.pages.dev/',
    industry: 'FinTech · Compliance',
    built: 'Anti-money laundering platform',
  },
  {
    client: 'KD Associates',
    url: 'kdassociates-sample.pages.dev',
    href: 'https://kdassociates-sample.pages.dev/',
    industry: 'Professional Services',
    built: 'Professional services website',
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsSection({
  eyebrow = 'VERIFIED CLIENT WORK',
  headline = 'Real projects. Every URL is live — click and verify.',
}: TestimonialsSectionProps) {
  return (
    <section className="bg-fj-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-[1120px] px-6 md:px-8">

        {/* Header */}
        <div className="max-w-[720px]">
          {eyebrow && (
            <p
              className="font-fj-mono font-medium uppercase text-fj-jet-blue"
              style={{ fontSize: '11px', letterSpacing: '0.14em' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={`fj-display font-medium text-fj-charcoal-text ${eyebrow ? 'mt-6' : ''}`}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {headline}
          </h2>
          <p
            className="mt-4 font-fj-body"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(245,245,242,0.55)',
              maxWidth: '560px',
            }}
          >
            We don&apos;t ask you to take our word for it. Every project below
            links to a live site — open it, run PageSpeed, inspect the code.
            That&apos;s the standard we hold ourselves to.
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.client}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl p-6 lg:p-7"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 0.18s, border-color 0.18s',
              }}
            >
              {/* Top row: client name + US badge */}
              <div className="flex items-start justify-between gap-3">
                <p
                  className="font-fj-body font-semibold text-fj-charcoal-text"
                  style={{ fontSize: '1.0625rem' }}
                >
                  {p.client}
                </p>
                {p.highlight && (
                  <span
                    className="shrink-0 rounded-md font-fj-mono font-semibold text-white"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.08em',
                      background: 'rgba(0,82,204,0.75)',
                      padding: '3px 7px',
                    }}
                  >
                    {p.highlight}
                  </span>
                )}
              </div>

              {/* Industry */}
              <p
                className="mt-1.5 font-fj-mono font-medium uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.10em',
                  color: 'rgba(245,245,242,0.38)',
                }}
              >
                {p.industry}
              </p>

              {/* What was built */}
              <p
                className="mt-4 flex-1 font-fj-body"
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'rgba(245,245,242,0.65)',
                }}
              >
                {p.built}
              </p>

              {/* Live URL */}
              <div
                className="mt-5 flex items-center gap-1.5 font-fj-mono"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.04em',
                  color: 'rgba(245,245,242,0.35)',
                }}
              >
                <ExternalLinkIcon />
                <span className="truncate">{p.url}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Honest bottom bar */}
        <div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          style={{ color: 'rgba(245,245,242,0.32)' }}
        >
          <span className="font-fj-mono" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
            6 live, verifiable projects above
          </span>
          <span className="font-fj-mono" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
            500+ total projects delivered
          </span>
          <span className="font-fj-mono" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
            Want to speak with a past client? We&apos;ll connect you.
          </span>
        </div>

      </div>
    </section>
  );
}
