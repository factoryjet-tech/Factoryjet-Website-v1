import ReviewPage, { reviewMetadata } from '../ReviewPage';

export const metadata = reviewMetadata;

export default function WorkshopReviewPage() {
  return <ReviewPage concept="workshop" />;
}
