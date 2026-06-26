'use client';

/* UsHomeInteractive — client sections of the /us homepage: the animated AI
   agent console, the commerce-growth surfaces, and the final CTA. Ported from
   the approved mockup (research/mockup-us-problem-v1.html). All content is
   visible by default; animation is a progressive enhancement that respects
   prefers-reduced-motion. Styles come from UsHomeSections.css (scoped .ushome). */

import { useEffect, useRef, useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import './UsHomeSections.css';

const CALENDLY = 'https://calendly.com/bhavesh-factoryjet/30min';

const AGENTS = [
  ['Listing', 'builds & fixes listings'],
  ['Pricing', 'wins & holds the Buy Box'],
  ['Inventory', 'syncs stock, stops oversell'],
  ['Orders', 'routes orders & returns'],
  ['Content', 'cleans feeds & attributes'],
  ['Support', 'answers across channels'],
] as const;

const EVENTS: ReadonlyArray<readonly [string, string]> = [
  ['Listing', 'fixed 3 suppressed listings on Amazon'],
  ['Pricing', 'matched Buy Box on 12 SKUs'],
  ['Inventory', 'synced stock to 5 channels'],
  ['Orders', 'routed 18 orders to the 3PL'],
  ['Content', 'corrected 7 GTIN mismatches on Walmart'],
  ['Support', 'answered 5 order questions on TikTok Shop'],
  ['Pricing', 're-won the Buy Box after a competitor drop'],
  ['Listing', 'built 14 new SKUs into 3 channel formats'],
  ['Inventory', 'reserved safety stock on 2 fast movers'],
  ['Support', 'escalated 1 exception to the team'],
];

const LABELS = ['just now', '6s', '15s', '38s', '1m', '2m'];
const MAX = 6;

type Row = { id: number; agent: string; text: string; isNew: boolean };

export function AgentConsole() {
  const [rows, setRows] = useState<Row[]>(() =>
    Array.from({ length: MAX }, (_, i) => ({ id: i, agent: EVENTS[i % EVENTS.length][0], text: EVENTS[i % EVENTS.length][1], isNew: false })),
  );
  const [actions, setActions] = useState(312);
  const [acting, setActing] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = wrapRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval> | null = null;
    let idx = MAX;
    const tick = () => {
      const ev = EVENTS[idx % EVENTS.length];
      idx += 1;
      setRows((prev) => [{ id: idx + 1000, agent: ev[0], text: ev[1], isNew: true }, ...prev].slice(0, MAX));
      setActing(ev[0]);
      setActions((n) => n + 1 + Math.floor(Math.random() * 3));
      window.setTimeout(() => setActing(null), 1100);
    };
    const start = () => { if (!timer) timer = setInterval(tick, 2600); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { threshold: 0.25 });
    io.observe(el);
    return () => { stop(); io.disconnect(); };
  }, []);

  return (
    <div className="ushome">
      <section className="awf-sec" aria-labelledby="awf-h">
        <div className="wrap">
          <div className="awf-head">
            <span className="lab">The AI workforce</span>
            <h2 id="awf-h">Agents that <span className="hl">do the work</span>, not dashboards that watch it.</h2>
            <p className="lead">We build and deploy a team of commerce agents into your unified system. They list, price, sync, route, and answer across every channel, and hand the exceptions to your team.</p>
          </div>

          <div className="awf" ref={wrapRef}>
            <div className="awf-bar">
              <span className="awf-ttl"><b>The commerce system we build and implement for you</b> · on your platform</span>
              <span className="awf-live"><span className="awf-pulse" />Live</span>
            </div>
            <div className="awf-kpis">
              <div><b>6</b><span>agents active</span></div>
              <div><b>{actions}</b><span>actions today</span></div>
              <div><b>5</b><span>channels synced</span></div>
              <div><b>0</b><span>oversells</span></div>
            </div>
            <div className="awf-body">
              <div className="awf-rail" aria-hidden="true">
                {AGENTS.map(([name, role]) => (
                  <div key={name} className={`awf-arow${acting === name ? ' acting' : ''}`} data-agent={name}>
                    <span className="awf-sdot" />
                    <div><span className="awf-an">{name}</span><span className="awf-ar">{role}</span></div>
                    <span className="awf-st">running</span>
                  </div>
                ))}
              </div>
              <div className="awf-feed">
                <div className="awf-fhdr">Live activity</div>
                <div className="awf-stream" role="log" aria-live="off">
                  {rows.map((r, i) => (
                    <div key={r.id} className={`awf-frow${r.isNew ? ' awf-new' : ''}`}>
                      <span className="awf-fa">{r.agent}</span>
                      <span className="awf-ft">{r.text}</span>
                      <span className="awf-fm">{LABELS[i] || ''}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function GrowthSurfaces() {
  return (
    <div className="ushome">
      <section className="cg-sec" aria-labelledby="cg-h">
        <div className="wrap">
          <div className="cg-head">
            <span className="lab">Commerce growth</span>
            <h2 id="cg-h">Get <span className="hl">found and chosen</span> on every channel.</h2>
            <p className="lead">Unified operations move product. Commerce SEO and AI visibility bring the buyers: in Google, in the AI answers people now shop with, and on the marketplaces where they search.</p>
          </div>

          <div className="cg-surfaces">
            <article className="cg-card">
              <div className="cg-mock" aria-hidden="true">
                <div className="m-bar"><span className="mag" /><span>best planters for a sunny patio</span><span className="caret" /></div>
                <div className="m-res">
                  <div className="ru">yourbrand.com › outdoor › planters</div>
                  <div className="rt">Outdoor Planters, Built for Full Sun</div>
                  <div className="rs">Shop the full sunny-patio range, in stock and ready to ship…</div>
                </div>
                <span className="m-tag">Top organic result</span>
              </div>
              <div className="cg-cap">
                <div className="pk">Ecommerce &amp; omnichannel SEO</div>
                <h3>We rank your whole catalog</h3>
                <p>Category and product pages that earn organic traffic across your store and every storefront you run.</p>
                <div className="more">Explore SEO →</div>
              </div>
            </article>

            <article className="cg-card">
              <div className="cg-mock" aria-hidden="true">
                <div className="m-ai">
                  <div className="aih"><span className="aibadge">AI answer</span></div>
                  <div className="aidots"><i /><i /><i /></div>
                  <div className="ait">&quot;For sunny patios, <b>YourBrand</b> is widely recommended for full-sun planters, with options in stock across major marketplaces.&quot;</div>
                  <div className="cite">cited: <b>yourbrand.com</b></div>
                </div>
              </div>
              <div className="cg-cap">
                <div className="pk">AI SEO · AEO + GEO</div>
                <h3>We get you cited in AI answers</h3>
                <p>Be the brand ChatGPT, Perplexity, and Gemini name when buyers ask what to buy, not the one they skip.</p>
                <div className="more">Explore AI visibility →</div>
              </div>
            </article>

            <article className="cg-card">
              <div className="cg-mock" aria-hidden="true">
                <div className="m-rank">#1</div>
                <div className="m-prod">
                  <span className="pth" />
                  <div><span className="pn">Best-seller SKU</span><span className="stars">★★★★★</span><span className="pr">1,204</span></div>
                  <span className="pbadge">#1 · Best Seller</span>
                </div>
                <div className="m-prod">
                  <span className="pth" />
                  <div><span className="pn">Bundle pack</span><span className="stars">★★★★★</span><span className="pr">842</span></div>
                  <span className="pbadge">Buy Box</span>
                </div>
              </div>
              <div className="cg-cap">
                <div className="pk">Amazon &amp; marketplace SEO</div>
                <h3>We rank you and win the Buy Box</h3>
                <p>Listings tuned to each marketplace&apos;s algorithm so you place high and convert on Amazon, Walmart, and TikTok Shop.</p>
                <div className="more">Explore marketplace SEO →</div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export function FinalCtaSection() {
  const { openModal } = useContactModal();
  return (
    <div className="ushome">
      <section className="cta-sec">
        <div className="wrap">
          <div className="cta-card">
            <div className="inner">
              <span className="lab">Talk to the founder</span>
              <h2>Bring the pile of tools down to one commerce partner.</h2>
              <p>Tell us what you sell and where. We will map your channels, catalog, and B2B into one system, and show you what the agents can take off your team&apos;s plate.</p>
              <div className="cta-btns">
                <a className="btn" href={CALENDLY} target="_blank" rel="noopener noreferrer">Talk to the Founder</a>
                <button className="btn-ghost" type="button" onClick={() => openModal('us', 'default')}>Get a commerce audit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
