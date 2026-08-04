import Link from 'next/link';
import AuModalButton from './AuModalButton';

/**
 * AU Header — bespoke header for /au/* pages, mirroring the UK market's
 * approach (src/app/uk/components/Header.tsx) of a market-local header
 * rather than extending SiteHeader's 'us' | 'in' | 'uae' locales.
 *
 * Unlike the UK header this one is a server component: the mobile menu is
 * a CSS-only <details> disclosure (styled in au-home.css), so the only
 * client code is the modal CTA button. Ported verbatim from
 * research/mockup-au-home-v3.html. Anchors are /au#... so the header keeps
 * working from future /au/* sub-pages.
 */

const WA_HREF =
  'https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20Australian%20business.';

const NAV_LINKS = [
  { label: 'Services', href: '/au#services' },
  { label: 'Process', href: '/au#process' },
  { label: 'Locations', href: '/au#cities' },
  { label: 'Work', href: '/au#work' },
  { label: 'FAQ', href: '/au#faq' },
];

export default function AuHeader() {
  return (
    <header className="auh-header">
      <div className="wrap nav">
        <Link href="/au" className="logo" aria-label="FactoryJet Australia, home">
          Factory<span>Jet</span> <span className="au-tag">AU</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <AuModalButton className="btn btn-orange" ctaId="au_header_get_quote">
            Get a free quote
          </AuModalButton>
          <details className="mnav">
            <summary aria-label="Open menu">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h11" />
              </svg>
            </summary>
            <nav className="panel" aria-label="Mobile">
              <a href="/au#services">Services</a>
              <a href="/au#process">Our 7-day process</a>
              <a href="/au#cities">Locations</a>
              <a href="/au#work">Case studies</a>
              <a href="/au#faq">FAQ</a>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
