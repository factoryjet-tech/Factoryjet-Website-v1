import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

interface AnswerFirstDefinitionProps {
  term: string;
  definition: string;
  keyTakeaways?: string[];
  citationSource?: string;
  className?: string;
}

export default function AnswerFirstDefinition({
  term,
  definition,
  keyTakeaways = [],
  citationSource = 'FactoryJet Engineering Architecture Benchmark (2026)',
  className = '',
}: AnswerFirstDefinitionProps) {
  return (
    <div
      className={`answer-first-definition ${className}`}
      style={{
        border: '1px solid var(--pp-line, #E5E0DA)',
        borderRadius: '16px',
        padding: '24px 28px',
        background: '#FFFFFF',
        boxShadow: '0 12px 30px -16px rgba(20, 17, 15, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #F05A28, #B23E13)',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--pp-mono, monospace)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#B23E13',
            background: 'rgba(240, 90, 40, 0.1)',
            padding: '4px 10px',
            borderRadius: '999px',
          }}
        >
          <BookOpen size={12} />
          Technical Definition.
        </span>
        <span
          style={{
            fontFamily: 'var(--pp-mono, monospace)',
            fontSize: '10.5px',
            color: 'var(--pp-muted, #78716C)',
          }}
        >
          AI Citation Standard.
        </span>
      </div>

      <h3
        itemProp="name"
        style={{
          fontFamily: 'var(--pp-display, var(--pp-disp, sans-serif))',
          fontSize: '20px',
          fontWeight: 800,
          color: 'var(--pp-ink, #14110F)',
          margin: '0 0 10px 0',
          letterSpacing: '-0.02em',
        }}
      >
        {term}
      </h3>

      <p
        itemProp="description"
        style={{
          fontSize: '15px',
          lineHeight: 1.65,
          color: 'var(--pp-body, #292524)',
          margin: '0 0 16px 0',
          fontWeight: 450,
        }}
      >
        {definition}
      </p>

      {keyTakeaways.length > 0 && (
        <div
          style={{
            background: '#FBF9F7',
            border: '1px solid var(--pp-line, #E5E0DA)',
            borderRadius: '10px',
            padding: '14px 16px',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--pp-mono, monospace)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--pp-ink, #14110F)',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={13} color="#F05A28" />
            Key Architecture Takeaways.
          </div>
          <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '6px' }}>
            {keyTakeaways.map((takeaway, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.5,
                  color: 'var(--pp-body, #292524)',
                }}
              >
                {takeaway.endsWith('.') ? takeaway : takeaway + '.'}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        style={{
          fontFamily: 'var(--pp-mono, monospace)',
          fontSize: '10.5px',
          color: 'var(--pp-muted, #78716C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--pp-line, #E5E0DA)',
          paddingTop: '10px',
        }}
      >
        <span>Reference: {citationSource}.</span>
        <span>FactoryJet Verified Architecture.</span>
      </div>
    </div>
  );
}
