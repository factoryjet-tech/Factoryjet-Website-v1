import Link from 'next/link';
import { CLIENTS, clientLogoSrc, type Client } from '@/data/clients';
import './ClientLogoStrip.css';

/**
 * Client strip (13 Nov 2026). Pure server component, zero JS.
 *
 * Rendered as the first child of UsSiteFooter, so it sits below the fold on every
 * US, UK and AU page and can never be the LCP element. LogoBar renders the same
 * list through ClientMark. A page that already shows LogoBar hides this footer
 * strip through CSS (see ClientLogoStrip.css), so no page shows two strips.
 *
 * Motion: one CSS keyframe drift, paused on hover and keyboard focus, paused
 * off-screen by PauseOffscreenLoops (it is a <section>), and replaced by a static
 * wrapped list under prefers-reduced-motion.
 */

/** One client: logo image when public/clients/<slug>.svg|png exists, else a text wordmark. */
export function ClientMark({ client, linked = true }: { client: Client; linked?: boolean }) {
  const src = clientLogoSrc(client.slug);
  const mark = src
    ? <img className="fj-client__img" src={src} alt={client.name} height={24} loading="lazy" decoding="async" />
    : <span className="fj-client__word">{client.name}</span>;
  if (linked && client.caseStudy) {
    return <Link prefetch={false} href={client.caseStudy} className="fj-client__link">{mark}</Link>;
  }
  return mark;
}

interface ClientLogoStripProps {
  label?: string;
  className?: string;
}

export default function ClientLogoStrip({ label = 'Selected clients', className = '' }: ClientLogoStripProps) {
  return (
    <section className={`fj-clients ${className}`.trim()} aria-label={label} data-fj-clients="footer">
      <div className="fj-clients__inner">
        <p className="fj-clients__label">{label}</p>
        <div className="fj-clients__viewport">
          <div className="fj-clients__track">
            <ul className="fj-clients__list">
              {CLIENTS.map((c) => <li key={c.slug} className="fj-client"><ClientMark client={c} /></li>)}
            </ul>
            {/* Second copy only makes the loop seamless. Hidden from assistive tech
                and focus, and not rendered at all under reduced motion. */}
            <ul className="fj-clients__list fj-clients__list--dup" aria-hidden="true" inert>
              {CLIENTS.map((c) => <li key={c.slug} className="fj-client"><ClientMark client={c} linked={false} /></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ClientLogoStrip };
