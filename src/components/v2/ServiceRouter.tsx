'use client';

/**
 * ServiceRouter: the interactive "What do you need in London?" router.
 *
 * Renders a row of tabs and a panel. Every route's full text is rendered
 * into the DOM (all panels present, only the active one shown), so crawlers
 * index every route regardless of JavaScript. The default active route is
 * index 0; clicking a tab switches which panel is visible. SSR-safe and
 * reduced-motion aware (the exfade class is a plain fade defined in CSS and
 * disabled under prefers-reduced-motion).
 */

import { useState } from 'react';

export interface ServiceRoute {
  rt: string;
  h: string;
  p: string;
  href: string;
  kv: [string, string][];
}

export interface ServiceRouterProps {
  routes: ServiceRoute[];
}

export default function ServiceRouter({ routes }: ServiceRouterProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="router">
      <span className="eyebrow">Start here</span>
      <h2>What do you need in London?</h2>
      <div className="rtabs" role="tablist" aria-label="What do you need in London?">
        {routes.map((r, i) => (
          <button
            key={r.rt}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={'rtab' + (active === i ? ' on' : '')}
            onClick={() => setActive(i)}
          >
            {r.h}
          </button>
        ))}
      </div>
      <div className="rpanel">
        <div className="rmain">
          {routes.map((r, i) => (
            <div
              key={r.rt}
              role="tabpanel"
              className={'rmain-item' + (active === i ? ' on rfade' : '')}
              hidden={active !== i}
            >
              <div className="rt">{r.rt}</div>
              <h3>{r.h}</h3>
              <p>{r.p}</p>
              <a href={r.href}>See {r.rt.toLowerCase()} in London &#8594;</a>
            </div>
          ))}
        </div>
        <div className="rside">
          {routes.map((r, i) => (
            <div
              key={r.rt}
              className={'rside-item' + (active === i ? ' on rfade' : '')}
              hidden={active !== i}
            >
              {r.kv.map((k) => (
                <div className="kv" key={k[0]}>
                  <span>{k[0]}</span>
                  <b>{k[1]}</b>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ServiceRouter };
