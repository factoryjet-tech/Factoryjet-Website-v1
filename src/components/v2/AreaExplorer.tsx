'use client';

/**
 * AreaExplorer: generic, reusable area/segment explorer.
 *
 * Renders a left button list and a right panel. Every area's full text is
 * rendered into the DOM (all panels present, only the active one shown via
 * CSS), so crawlers index every area's content regardless of JavaScript.
 * The default active area is index 0; clicking a button switches which panel
 * is visible.
 */

import { useState } from 'react';

export interface AreaItem {
  tag: string;
  name: string;
  strategy: string;
  body: string;
}

export interface AreaExplorerProps {
  areas: AreaItem[];
  className?: string;
}

export default function AreaExplorer({ areas, className }: AreaExplorerProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={'explorer' + (className ? ' ' + className : '')}>
      <div className="exnav" role="tablist" aria-label="London areas">
        {areas.map((a, i) => (
          <button
            key={a.name}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={active === i ? 'on' : ''}
            onClick={() => setActive(i)}
          >
            {a.name}
          </button>
        ))}
      </div>
      <div className="expanel">
        {areas.map((a, i) => (
          <div
            key={a.name}
            role="tabpanel"
            className={'expanel-item' + (active === i ? ' on exfade' : '')}
            hidden={active !== i}
          >
            <div className="tag">{a.tag}</div>
            <h3>{a.name}</h3>
            <div className="sect">Strategy: {a.strategy}</div>
            <p>{a.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { AreaExplorer };
