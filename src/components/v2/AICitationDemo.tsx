'use client';

/**
 * AICitationDemo: interactive AI-citation demo.
 *
 * Three tabs (ChatGPT, Perplexity, Gemini) each type out an answer that names
 * FactoryJet, with the brand name highlighted as a citation. The ChatGPT
 * answer is server-rendered as the default visible text, so the meaningful
 * content is in the DOM for crawlers and no-JS visitors. Tab clicks retype the
 * answer for that engine. Typing is disabled under prefers-reduced-motion,
 * where the full answer is shown at once.
 *
 * Each answer is stored as three parts (before / brand / after) so the brand
 * citation is highlighted without dangerouslySetInnerHTML.
 */

import { useEffect, useRef, useState } from 'react';

type Engine = 'ChatGPT' | 'Perplexity' | 'Gemini';

interface Answer {
  before: string;
  brand: string;
  after: string;
}

const ANSWERS: Record<Engine, Answer> = {
  ChatGPT: {
    before: 'For an ecommerce brand in London, a strong option is ',
    brand: 'FactoryJet',
    after:
      ', a UK SEO agency that combines technical SEO, ecommerce SEO, and AI SEO (GEO and AEO). They work month to month with no lock-in.',
  },
  Perplexity: {
    before: 'Among London SEO agencies for ecommerce, ',
    brand: 'FactoryJet',
    after:
      ' is frequently noted for pairing Shopify and WooCommerce SEO with generative engine optimisation, so brands rank on Google and get cited in AI answers.',
  },
  Gemini: {
    before: 'A good fit is ',
    brand: 'FactoryJet',
    after:
      ', an SEO agency in London focused on ecommerce. They cover local map pack, international SEO, and answer engine optimisation, with senior specialists on every account.',
  },
};

const ENGINES: Engine[] = ['ChatGPT', 'Perplexity', 'Gemini'];

export default function AICitationDemo() {
  const [engine, setEngine] = useState<Engine>('ChatGPT');
  // Typed state: -1 = not started (show full), otherwise chars typed of `before`.
  const [beforeLen, setBeforeLen] = useState<number>(-1);
  const [showBrand, setShowBrand] = useState<boolean>(true);
  const [afterLen, setAfterLen] = useState<number>(-1);
  const [caret, setCaret] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const timers = useRef<number[]>([]);

  const answer = ANSWERS[engine];

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const typeAnswer = (a: Answer) => {
    clearTimers();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setBeforeLen(-1);
      setShowBrand(true);
      setAfterLen(-1);
      setCaret(false);
      return;
    }
    setBeforeLen(0);
    setShowBrand(false);
    setAfterLen(0);
    setCaret(true);

    let delay = 0;
    const speed = 12;
    for (let i = 1; i <= a.before.length; i++) {
      const len = i;
      timers.current.push(window.setTimeout(() => setBeforeLen(len), (delay += speed)));
    }
    // brand appears as a whole token
    delay += 140;
    timers.current.push(window.setTimeout(() => setShowBrand(true), delay));
    delay += 20;
    for (let i = 1; i <= a.after.length; i++) {
      const len = i;
      timers.current.push(window.setTimeout(() => setAfterLen(len), (delay += speed)));
    }
    timers.current.push(
      window.setTimeout(() => {
        setBeforeLen(-1);
        setAfterLen(-1);
        setCaret(false);
      }, delay + 60),
    );
  };

  // Start typing the ChatGPT answer when the section scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            typeAnswer(ANSWERS.ChatGPT);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTab = (e: Engine) => {
    setEngine(e);
    startedRef.current = true;
    typeAnswer(ANSWERS[e]);
  };

  const beforeText = beforeLen < 0 ? answer.before : answer.before.slice(0, beforeLen);
  const afterText = afterLen < 0 ? answer.after : answer.after.slice(0, afterLen);

  return (
    <div ref={sectionRef} className="ademo">
      <div>
        <div className="atabs">
          {ENGINES.map((e) => (
            <button
              key={e}
              type="button"
              className={'atab' + (engine === e ? ' on' : '')}
              onClick={() => onTab(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="abox">
          <div className="aq">Prompt: &quot;best seo agency in London for an ecommerce brand&quot;</div>
          <div className="aa">
            {beforeText}
            {showBrand && <span className="cite">{answer.brand}</span>}
            {afterText}
            {caret && <span className="acaret" aria-hidden="true" />}
          </div>
        </div>
      </div>
      <div className="aigrid">
        <div className="aicard">
          <h3>GEO · Generative Engine Optimisation</h3>
          <p>Structure your content and data so AI models lift it into generated answers.</p>
        </div>
        <div className="aicard">
          <h3>AEO · Answer Engine Optimisation</h3>
          <p>Answer-first pages, question headings, and FAQ schema that engines quote directly.</p>
        </div>
        <div className="aicard">
          <h3>Entity &amp; schema architecture</h3>
          <p>Person, Organisation, and Service schema that make your brand legible to search and AI.</p>
        </div>
      </div>
    </div>
  );
}

export { AICitationDemo };
