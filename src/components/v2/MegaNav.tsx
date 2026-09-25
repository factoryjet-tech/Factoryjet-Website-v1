'use client';

/**
 * MegaNav: mega menu (desktop) and drawer menu (mobile), 2026-09-23. US by default;
 * UK pages pass UK_SERVICE_HUBS / UK_SIMPLE_MENUS (2026-09-25).
 *
 * Crawlability: every panel and every link is rendered into the HTML on every
 * page and only toggled with the `hidden` attribute. The previous header only
 * mounted a dropdown while it was open, so none of those links were visible to
 * Google or AI crawlers. Keep it that way: never render panels conditionally.
 *
 * Data lives in megaNavData.ts (one source for desktop and mobile).
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { SERVICE_HUBS as US_HUBS, SIMPLE_MENUS as US_MENUS, type NavColumn, type NavFeature, type ServiceHub, type SimpleMenu } from './megaNavData';

/** Menu data for one locale. Defaults to the US menu. */
type MenuData = { hubs?: ServiceHub[]; menus?: SimpleMenu[] };
import './MegaNav.css';

type TopKey = 'services' | string;

function Column({ col, onNavigate }: { col: NavColumn; onNavigate: () => void }) {
  return (
    <div className="mn-col">
      <p className="mn-col-h">{col.heading}</p>
      <ul className={col.kind === 'rich' ? 'mn-rich' : 'mn-compact'}>
        {col.items.map((it) => (
          <li key={it.href + it.label}>
            <Link href={it.href} onClick={onNavigate}>
              {col.kind === 'rich' && it.icon && (
                <span className="mn-ic" aria-hidden="true"><it.icon size={15} strokeWidth={1.7} /></span>
              )}
              <span className="mn-t">{it.label}</span>
              {it.badge && <span className="mn-badge">{it.badge}</span>}
            </Link>
          </li>
        ))}
      </ul>
      {col.more && <Link className="mn-more" href={col.more.href} onClick={onNavigate}>{col.more.label} →</Link>}
    </div>
  );
}

function Feature({ f, note, onNavigate }: { f: NavFeature; note?: { lead: string; label: string; href: string }; onNavigate: () => void }) {
  return (
    <>
      <Link className="mn-fcard" href={f.href} onClick={onNavigate}>
        <span className="mn-fimg">
          <img src={f.image} alt="" width={900} height={600} loading="lazy" decoding="async" />
        </span>
        <span className="mn-fbody">
          <span className="mn-fk">{f.kicker}</span>
          <span className="mn-ft">{f.title}</span>
          <span className="mn-fd">{f.body}</span>
          <span className="mn-fcta">{f.cta} →</span>
        </span>
      </Link>
      {note && (
        <p className="mn-fnote">
          {note.lead} <Link href={note.href} onClick={onNavigate}>{note.label} →</Link>
        </p>
      )}
    </>
  );
}

/** Desktop: top-level triggers plus floating mega panels. */
export function MegaNavDesktop({ hubs: SERVICE_HUBS = US_HUBS, menus: SIMPLE_MENUS = US_MENUS }: MenuData = {}) {
  const [open, setOpen] = useState<TopKey | null>(null);
  const [cat, setCat] = useState(SERVICE_HUBS[0].key);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpenedAt = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(null), []);
  const keepOpen = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const openNow = (key: TopKey) => { keepOpen(); if (open !== key) hoverOpenedAt.current = Date.now(); setOpen(key); };
  const closeSoon = () => { keepOpen(); closeTimer.current = setTimeout(close, 160); };
  // A hover opens the panel a moment before the click lands; that click must
  // not immediately close it again. Keyboard and later clicks still toggle.
  const onTopClick = (key: TopKey) => {
    if (open === key && Date.now() - hoverOpenedAt.current > 500) setOpen(null);
    else setOpen(key);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); };
    const onDown = (e: MouseEvent) => { if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [close]);

  const tops = [{ key: 'services', label: 'Services' }, ...SIMPLE_MENUS.map((m) => ({ key: m.key, label: m.label }))];

  return (
    <div className="mn" ref={rootRef} onMouseLeave={closeSoon}>
      <div className="mn-tops">
        {tops.map((t) => (
          <button
            key={t.key}
            type="button"
            className="mn-top"
            aria-expanded={open === t.key}
            aria-controls={`mn-panel-${t.key}`}
            onMouseEnter={() => openNow(t.key)}
            onClick={() => onTopClick(t.key)}
          >
            {t.label}
            <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="mn-scrim" hidden={!open} aria-hidden="true" onMouseEnter={closeSoon} onClick={close} />

      {/* Services: four hubs down the left rail, every hub panel always in the HTML. */}
      <div className="mn-panel" id="mn-panel-services" hidden={open !== 'services'} onMouseEnter={keepOpen}>
        <div className="mn-grid">
          <div className="mn-rail">
            <p className="mn-rail-h">Services</p>
            {SERVICE_HUBS.map((s, i) => (
              <Link
                key={s.key}
                href={s.hub}
                className="mn-rail-a"
                aria-current={cat === s.key ? 'true' : undefined}
                onMouseEnter={() => setCat(s.key)}
                onFocus={() => setCat(s.key)}
                onClick={close}
              >
                <span className="mn-n">0{i + 1}</span>
                <span className="mn-rt">{s.title}</span>
                <ArrowRight className="mn-go" size={14} strokeWidth={1.8} aria-hidden="true" />
                <span className="mn-rd">{s.rail}</span>
              </Link>
            ))}
            <p className="mn-rail-foot">Every category opens on its hub page.</p>
          </div>
          {SERVICE_HUBS.map((s, i) => (
            <div className="mn-body" key={s.key} hidden={cat !== s.key}>
              <div className="mn-head">
                <div>
                  <p className="mn-eyebrow">0{i + 1} · Service hub</p>
                  <p className="mn-h">{s.title}</p>
                  <p className="mn-sum">{s.summary}</p>
                </div>
                <Link className="mn-hub" href={s.hub} onClick={close}>
                  <span className="mn-tag">HUB</span>{s.hubLabel}<ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </div>
              <div className="mn-cols">
                {s.columns.map((c) => <Column key={c.heading} col={c} onNavigate={close} />)}
              </div>
            </div>
          ))}
          {SERVICE_HUBS.map((s) => (
            <div className="mn-feature" key={s.key} hidden={cat !== s.key}>
              <Feature f={s.feature} note={s.note} onNavigate={close} />
            </div>
          ))}
        </div>
      </div>

      {SIMPLE_MENUS.map((m) => (
        <div className="mn-panel mn-panel-simple" id={`mn-panel-${m.key}`} key={m.key} hidden={open !== m.key} onMouseEnter={keepOpen}>
          <div className="mn-grid mn-grid-simple">
            <div className="mn-body">
              <div className="mn-cols">
                {m.columns.map((c) => <Column key={c.heading} col={c} onNavigate={close} />)}
              </div>
            </div>
            <div className="mn-feature"><Feature f={m.feature} onNavigate={close} /></div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Mobile drawer content: Services opens on the four hubs, each hub link first. */
export function MegaNavMobile({ onNavigate, hubs: SERVICE_HUBS = US_HUBS, menus: SIMPLE_MENUS = US_MENUS }: { onNavigate: () => void } & MenuData) {
  const [section, setSection] = useState<string | null>('services');
  const [cat, setCat] = useState<string | null>(SERVICE_HUBS[0].key);

  const toggle = (key: string) => setSection(section === key ? null : key);

  const flatItems = (cols: NavColumn[]) => cols.map((c) => (
    <div key={c.heading}>
      <p className="mnm-grp">{c.heading}</p>
      {c.items.map((it) => (
        <Link key={it.href + it.label} className="mnm-it" href={it.href} onClick={onNavigate}>{it.label}</Link>
      ))}
    </div>
  ));

  return (
    <div className="mnm">
      <div className="mnm-sec">
        <button type="button" className="mnm-top" aria-expanded={section === 'services'} onClick={() => toggle('services')}>
          Services <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
        </button>
        <div className="mnm-inner" hidden={section !== 'services'}>
          {SERVICE_HUBS.map((s, i) => (
            <div className="mnm-cat" key={s.key}>
              <button type="button" className="mnm-cat-btn" aria-expanded={cat === s.key} onClick={() => setCat(cat === s.key ? null : s.key)}>
                <span className="mnm-n">0{i + 1}</span>
                <span className="mnm-t">{s.title}</span>
                <ChevronRight size={15} strokeWidth={2} aria-hidden="true" />
                <span className="mnm-d">{s.rail}</span>
              </button>
              <div className="mnm-list" hidden={cat !== s.key}>
                <Link className="mnm-hub" href={s.hub} onClick={onNavigate}>{s.hubLabel}<ArrowRight size={15} strokeWidth={1.8} aria-hidden="true" /></Link>
                {flatItems(s.columns)}
              </div>
            </div>
          ))}
        </div>
      </div>
      {SIMPLE_MENUS.map((m) => (
        <div className="mnm-sec" key={m.key}>
          <button type="button" className="mnm-top" aria-expanded={section === m.key} onClick={() => toggle(m.key)}>
            {m.label} <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </button>
          <div className="mnm-inner" hidden={section !== m.key}>
            <div className="mnm-list mnm-list-flat">{flatItems(m.columns)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
