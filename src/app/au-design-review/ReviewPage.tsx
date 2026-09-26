import type { Metadata } from 'next';
import { AustraliaHubContent } from '../au/page';

export type ReviewConcept = 'atlas' | 'workshop' | 'system';

export const reviewMetadata: Metadata = {
  title: 'FactoryJet Australia design review',
  description: 'Private visual design review for the FactoryJet Australia homepage.',
  robots: { index: false, follow: false, noarchive: true },
};

export default function ReviewPage({ concept }: { concept: ReviewConcept }) {
  return (
    <div className={`au-review au-review--${concept}`} data-review-concept={concept}>
      <AustraliaHubContent reviewConcept={concept} />
    </div>
  );
}
