import GoogleReviews from '../../GoogleReviews';

export default function TestimonialsSection() {
  return <GoogleReviews filter="featured" maxItems={3} showMeta />;
}
