import HeroInlineForm from '@/components/HeroInlineForm';
import './HeroOmnichannel.css';

/**
 * HeroOmnichannel — homepage hero.
 *
 * Static server component. The kinetic platform swapper was removed 2026-09-20:
 * it was the only client-side code in this file, and because it rendered just
 * SWAP_WORDS[0] into the served HTML, every other platform name was invisible
 * to non-rendering crawlers and AI fetchers. The platform row is plain static
 * text now, so all of it ships in the HTML.
 *
 * Positioning: ecommerce design / development / implementation / support, plus
 * the AI agents we build for commerce. Marketplace listing and management
 * services are deliberately not sold from this hero.
 *
 * Lead capture stays on the existing HeroInlineForm (name + email -> /thank-you).
 */

const PLATFORMS = ['Commerceflo', 'Shopify', 'Shopify Plus', 'WooCommerce', 'Headless'];

export default function HeroOmnichannel() {
  return (
    <section
      className="hero-omni"
      aria-label="Ecommerce development and AI commerce agents for DTC and B2B brands"
    >
      <div className="ho-wrap">
        <div className="ho-grid">
          {/* Left: copy + lead form */}
          <div>
            <p className="ho-eyebrow">Ecommerce development for the AI era</p>
            <h1>We build your ecommerce. And the AI agents that keep it running.</h1>
            <p className="ho-sub">
              Design, development, implementation and support for DTC and B2B brands.
            </p>

            <p className="ho-platforms">{PLATFORMS.join(' · ')}</p>

            <HeroInlineForm source="us_hero_inline" region="us" submitLabel="Get a commerce audit" />

            <div className="ho-stats">
              <div>
                <b>10+</b>
                <small>years building commerce</small>
              </div>
              <div>
                <b>500+</b>
                <small>businesses served</small>
              </div>
              <div>
                <b>Any</b>
                <small>platform, DTC or B2B</small>
              </div>
            </div>
          </div>

          {/* Right: channel -> engine constellation */}
          <div>
            <div
              className="ho-stage"
              role="img"
              aria-label="Any sales channel or marketplace worldwide: Amazon, Walmart, TikTok Shop, Shopify, and B2B, connecting into one unified commerce engine: one catalog, one inventory, one order engine."
            >
              <svg className="ho-links-svg" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
                <line className="ho-flow" x1="78" y1="60" x2="200" y2="200" />
                <line className="ho-flow" x1="44" y1="200" x2="200" y2="200" style={{ animationDelay: '.25s' }} />
                <line className="ho-flow" x1="78" y1="340" x2="200" y2="200" style={{ animationDelay: '.5s' }} />
                <line className="ho-flow" x1="322" y1="60" x2="200" y2="200" style={{ animationDelay: '.75s' }} />
                <line className="ho-flow" x1="356" y1="200" x2="200" y2="200" style={{ animationDelay: '1s' }} />
                <line className="ho-flow" x1="322" y1="340" x2="200" y2="200" style={{ animationDelay: '1.25s' }} />
              </svg>
              <div className="ho-node ho-n1"><span className="g">a</span>Amazon</div>
              <div className="ho-node ho-n2"><span className="g">♪</span>TikTok Shop</div>
              <div className="ho-node ho-n3"><span className="g">⛬</span>B2B Portal</div>
              <div className="ho-node ho-n4"><span className="g">W</span>Walmart</div>
              <div className="ho-node ho-n5"><span className="g">S</span>Shopify</div>
              <div className="ho-node ho-n6"><span className="g">+</span>Any marketplace</div>
              <div className="ho-glow" aria-hidden="true" />
              <div className="ho-core" aria-hidden="true">
                <span className="ho-ring" />
                <span className="ho-ember" />
                <span className="ho-tag">
                  Unified<br />Commerce<br />Engine<br /><b>Commerceflo</b>
                </span>
              </div>
              <div className="ho-out" aria-hidden="true">
                <span className="e">→</span> one catalog · one inventory · one order engine
                <span className="pwr">powered by Commerceflo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
