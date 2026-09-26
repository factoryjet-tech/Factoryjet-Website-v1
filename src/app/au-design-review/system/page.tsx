import ReviewPage, { reviewMetadata } from '../ReviewPage';

export const metadata = reviewMetadata;

export default function SystemReviewPage() {
  return <ReviewPage concept="system" />;
}
