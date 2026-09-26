import ReviewPage, { reviewMetadata } from '../ReviewPage';

export const metadata = reviewMetadata;

export default function AtlasReviewPage() {
  return <ReviewPage concept="atlas" />;
}
