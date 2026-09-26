import type { Metadata } from 'next';
import Link from 'next/link';
import './review.css';

export const metadata: Metadata = {
  title: 'FactoryJet Australia design concepts',
  description: 'Private comparison gallery for the FactoryJet Australia homepage redesign.',
  robots: { index: false, follow: false, noarchive: true },
};

const concepts = [
  {
    key: 'atlas',
    label: 'Concept A',
    name: 'Australian Atlas',
    description: 'Editorial, asymmetric and confident. The page reads as one connected field guide instead of a stack of cards.',
  },
  {
    key: 'workshop',
    label: 'Concept B',
    name: 'Working Session',
    description: 'Cinematic and tactile. Photography becomes scene-setting, while the content sits in calm, highly legible working panels.',
  },
  {
    key: 'system',
    label: 'Concept C',
    name: 'One Senior System',
    description: 'Precise and technical. A disciplined grid, flatter components and strong rules make the breadth of the offer feel coherent.',
  },
] as const;

export default function AustraliaDesignReviewIndex() {
  return (
    <main className="review-index">
      <header className="review-index__header">
        <p>FactoryJet Australia</p>
        <h1>Three visual directions.<br />One unchanged page.</h1>
        <div>
          <p>The same live component, copy, links, forms and FAQ data render inside every concept.</p>
          <p>These routes are marked no-index and do not alter the production <code>/au</code> page.</p>
        </div>
      </header>
      <section className="review-index__grid" aria-label="Design concepts">
        {concepts.map((concept, index) => (
          <Link className={`review-index__card review-index__card--${concept.key}`} href={`/au-design-review/${concept.key}`} key={concept.key}>
            <span>{concept.label}</span>
            <div className="review-index__preview" aria-hidden="true">
              <i>{String(index + 1).padStart(2, '0')}</i>
              <b />
              <em />
            </div>
            <h2>{concept.name}</h2>
            <p>{concept.description}</p>
            <strong>Open full-page mockup →</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}
