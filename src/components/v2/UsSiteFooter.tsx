import Link from 'next/link';
import { US_FOOTER_COLUMNS, US_FOOTER_FEATURED_COLUMNS } from '@/data/usFooterColumns';
import { RECOGNITION_PROFILES } from '@/data/recognitionProfiles';
import type { SiteFooterLink } from './SiteFooter';
import Wordmark from './Wordmark';
import './UsSiteFooter.css';

interface UsSiteFooterProps {
  logoText: string;
  tagline: string;
  copyright: string;
  bottomLinks?: ReadonlyArray<SiteFooterLink>;
  regions: ReadonlyArray<SiteFooterLink>;
  currentRegion: string;
  isDark: boolean;
  showRecognition: boolean;
  className: string;
}

/** Static, progressively disclosed navigation. All original links and labels
 * remain in the HTML; no JavaScript is needed to browse the full directory. */
export default function UsSiteFooter({ logoText, tagline, copyright, bottomLinks,
  regions, currentRegion, isDark, showRecognition, className }: UsSiteFooterProps) {
  return (
    <footer className={`us-footer ${isDark ? 'us-footer--dark' : ''} ${className}`.trim()}>
      <div className="us-footer__inner">
        <div className="us-footer__brand">
          <div>
            <Wordmark label={logoText} className="us-footer__wordmark" />
            <p className="us-footer__tagline">{tagline}</p>
          </div>
          <Link href="/contact" className="us-footer__contact">
            Talk to the founder
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 9h12M9 3l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <nav aria-label="Footer navigation" className="us-footer__featured">
          {US_FOOTER_FEATURED_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="us-footer__heading">{column.heading}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Small screens disclose one short category at a time. CSS removes
            the desktop navigation from both layout and accessibility tree;
            both views use the same original link objects and require no JS. */}
        <nav aria-label="Footer navigation" className="us-footer__mobile-navigation">
          {US_FOOTER_FEATURED_COLUMNS.map((column) => (
            <details key={column.heading} className="us-footer__mobile-group">
              <summary>
                {column.heading}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 9h12" /><path className="us-footer__plus" d="M9 3v12" />
                </svg>
              </summary>
              <ul>{column.links.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}</ul>
            </details>
          ))}
        </nav>

        <details className="us-footer__directory">
          <summary>
            All Services
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 9h12" /><path className="us-footer__plus" d="M9 3v12" />
            </svg>
          </summary>
          <nav aria-label="Complete footer directory" className="us-footer__directory-grid">
            {US_FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="us-footer__heading">{column.heading}</p>
                <ul>{column.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}><Link href={link.href}>{link.label}</Link></li>
                ))}</ul>
              </div>
            ))}
          </nav>
        </details>

        {showRecognition && (
          <div className="us-footer__recognition">
            <p className="us-footer__heading">Recognized on</p>
            <ul>{RECOGNITION_PROFILES.map((profile) => (
              <li key={profile.href}><a href={profile.href} target="_blank" rel="noopener noreferrer">{profile.label}</a></li>
            ))}</ul>
            <p className="us-footer__verification">Verified enterprise technology &amp; commerce engineering partner.</p>
          </div>
        )}

        <div className="us-footer__bottom">
          <div className="us-footer__identity">
            <p>{copyright}</p>
            <details className="us-footer__region">
              <summary>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.3" /><ellipse cx="8" cy="8" rx="2.7" ry="6.3" /><path d="M1.9 6h12.2M1.9 10h12.2" />
                </svg>
                {currentRegion}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="m3 4.5 3 3 3-3" />
                </svg>
              </summary>
              <ul>{regions.map((region) => (
                <li key={region.href}><Link href={region.href} aria-current={region.label === currentRegion ? 'page' : undefined}>{region.label}</Link></li>
              ))}</ul>
            </details>
          </div>
          {bottomLinks && bottomLinks.length > 0 && (
            <nav aria-label="Legal"><ul className="us-footer__legal">{bottomLinks.map((link) => (
              <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
            ))}</ul></nav>
          )}
        </div>
      </div>
    </footer>
  );
}
