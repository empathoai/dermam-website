import { useState } from 'react';
import { Star } from '../design-system/icons';
import reviewsData from '../data/reviews.json';
import Container from './ui/Container';
import Card from './ui/Card';
import ResponsiveCardGroup from './ui/ResponsiveCardGroup';

type ReviewTag = 'limpieza_facial' | 'prf' | 'postoperatorio' | 'general';
type ReviewFilter = ReviewTag | 'featured';

type GoogleReviewsProps = {
  filter?: ReviewFilter;
  maxItems?: number;
  showMeta?: boolean;
  variant?: 'light' | 'dark';
};

type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  tags: ReviewTag[];
  featured: boolean;
};

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/DERMA.M/@26.6627718,-80.058463,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d7a4252e99f3:0x1b35234db1ddfa5c!8m2!3d26.6627718!4d-80.0558881!16s%2Fg%2F11qh1lr84l?entry=ttu';

const fallbackMap: Record<ReviewFilter, ReviewFilter | null> = {
  limpieza_facial: 'general',
  prf: 'general',
  postoperatorio: 'general',
  general: 'featured',
  featured: null,
};

const getReviewsByFilter = (reviews: Review[], filter: ReviewFilter): Review[] => {
  if (filter === 'featured') return reviews.filter((review) => review.featured);
  return reviews.filter((review) => review.tags.includes(filter));
};

const getFilteredReviews = (reviews: Review[], filter: ReviewFilter): Review[] => {
  const filtered = getReviewsByFilter(reviews, filter);
  if (filtered.length > 0) return filtered;
  const fallback = fallbackMap[filter];
  return fallback ? getFilteredReviews(reviews, fallback) : [];
};

const truncateText = (text: string, expanded: boolean) => {
  if (expanded || text.length <= 120) return text;
  return `${text.slice(0, 120).trim()}…`;
};

function ReviewText({ text, dark = false }: { text: string; dark?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const shouldShowToggle = text.length > 120;

  return (
    <div
      className={`mb-8 flex flex-1 flex-col items-center justify-center text-center font-light italic leading-[1.7] whitespace-pre-line ${
        dark ? 'text-base-300' : 'text-text-secondary'
      }`}
    >
      <span>&ldquo;{truncateText(text, expanded)}&rdquo;</span>
      {shouldShowToggle && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className={`mt-3 text-sm font-medium not-italic underline underline-offset-4 ${
            dark ? 'text-base-400 hover:text-base-100' : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
}

export default function GoogleReviews({
  filter = 'featured',
  maxItems = 3,
  showMeta = false,
  variant = 'light',
}: GoogleReviewsProps) {
  const reviews = getFilteredReviews(reviewsData.reviews as Review[], filter).slice(0, maxItems);
  const isDark = variant === 'dark';

  if (reviews.length === 0) return null;

  return (
    <section className={isDark ? 'py-24 lg:py-28 bg-base-900' : 'py-24 bg-canvas'}>
      <Container>
        <div className="mb-16 text-center">
          <p
            className={`text-xs font-medium uppercase tracking-[0.15em] mb-4 ${
              isDark ? 'text-base-400' : 'text-text-secondary'
            }`}
          >
            RESE&Ntilde;AS REALES DE PACIENTES
          </p>
          <h2
            className={`text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-8 ${
              isDark ? 'text-base-100' : 'text-text-primary'
            }`}
          >
            LO QUE DICEN DE DERMA.M
          </h2>
          {showMeta && (
            <>
              <div
                className={`text-5xl md:text-6xl font-sans mb-4 ${
                  isDark ? 'text-base-100' : 'text-text-primary'
                }`}
              >
                {reviewsData.meta.rating}
              </div>
              <div
                className="flex justify-center gap-1 mb-4 text-yellow-400"
                aria-label={`Calificación ${reviewsData.meta.rating} de 5 en Google`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    fill={i < Math.round(reviewsData.meta.rating) ? 'currentColor' : 'none'}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <ResponsiveCardGroup desktopColumns={3} mobileCardWidth="84vw" desktopItemClassName="h-full">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className={`flex h-full min-h-[18rem] flex-col items-center justify-between p-10 text-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-[1rem] ${
                isDark
                  ? 'bg-white/[0.05] border border-white/10 hover:bg-white/[0.08]'
                  : 'bg-white border border-border-card hover:-translate-y-1 hover:border-border-card-hover hover:shadow-subtle shadow-subtle'
              }`}
            >
              <div
                className="flex gap-1 mb-6 text-yellow-400"
                aria-label={`${review.rating} de 5 estrellas`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <ReviewText text={review.text} dark={isDark} />
              <span
                className={`mt-auto block text-xs font-medium uppercase tracking-[0.12em] ${
                  isDark ? 'text-base-400' : 'text-text-secondary'
                }`}
              >
                {review.author}
              </span>
            </Card>
          ))}
        </ResponsiveCardGroup>

        <div className="mt-16 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver todas las reseñas de DERMA.M en Google (abre en nueva pestaña)"
            className={`text-xs font-medium uppercase tracking-[0.15em] underline underline-offset-4 transition-colors ${
              isDark
                ? 'text-base-400 hover:text-base-100'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            VER TODAS LAS RESE&Ntilde;AS EN GOOGLE &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
