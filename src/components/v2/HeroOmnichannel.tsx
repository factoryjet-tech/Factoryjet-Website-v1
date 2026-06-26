'use client';

import { useEffect, useState } from 'react';
import HeroInlineForm from '@/components/HeroInlineForm';
import './HeroOmnichannel.css';

/**
 * HeroOmnichannel — /us homepage hero, ported faithfully from the approved
 * mockup (research/mockup-us-problem-v1.html). Locked copy. White background,
 * single orange accent, brand fonts. The right-side "constellation" shows any
 * channel/marketplace flowing into one unified commerce engine.
 *
 * Functional lead capture is preserved via the existing HeroInlineForm
 * (name + email -> /thank-you conversion path), not the mockup's dummy form.
 * The kinetic platform swap respects prefers-reduced-motion.
 */

const SWAP_WORDS = [
  'Shopify Plus',
  'BigCommerce',
  'Adobe Commerce',
  'Amazon',
  'Walmart',
  'TikTok Shop',
  'any marketplace',
];

export default function HeroOmnichannel() {
  const [swapIndex, setSwapIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setSwapIndex((i) => (i + 1) % SWAP_WORDS.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(t);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-omni" aria-label="Omnichannel and B2B commerce development">
      <div className="ho-wrap">
        <div className="ho-grid">
          {/* Left: copy + lead form */}
          <div>
            <p className="ho-eyebrow">Omnichannel &amp; B2B commerce solutions</p>
            <h1>We design and build commerce that sells everywhere.</h1>
            <p className="ho-kin">
              Development &amp; implementation partner for{' '}
              <span className="ho-swap" style={{ opacity: visible ? 1 : 0 }}>
                {SWAP_WORDS[swapIndex]}
              </span>
            </p>
            <p className="ho-sub">
              An omnichannel commerce development and implementation agency for DTC and B2B brands.
              One catalog, one inventory, one order engine, built on Shopify, Magento, WooCommerce,
              or Commerceflo, and engineered to scale.
            </p>

            <HeroInlineForm source="us_hero_inline" region="us" submitLabel="Get a commerce audit" />

            <div className="ho-stats">
              <div>
                <b>Any</b>
                <small>channel or marketplace, worldwide</small>
              </div>
              <div>
                <b>1</b>
                <small>catalog, inventory and order engine</small>
              </div>
              <div>
                <b>10+</b>
                <small>years building commerce</small>
              </div>
            </div>
          </div>

          {/* Right: channel -> engine constellation */}
          <div>
            <div
              className="ho-stage"
              role="img"
              aria-label="Any sales channel or marketplace worldwide — Amazon, Walmart, TikTok Shop, Shopify, and B2B — connecting into one unified commerce engine: one catalog, one inventory, one order engine."
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
