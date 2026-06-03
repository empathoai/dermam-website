import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const RAW_PATH = fileURLToPath(new URL('../src/data/reviews-raw.json', import.meta.url));
const OUTPUT_PATH = fileURLToPath(new URL('../src/data/reviews.json', import.meta.url));

const tagRules = {
  limpieza_facial: ['limpieza', 'facial', 'poros', 'piel'],
  prf: ['plasma', 'plaquetas', 'prf', 'prp', 'cabello'],
  postoperatorio: ['post', 'operación', 'operacion', 'cirugía', 'cirugia', 'recuperación', 'recuperacion', 'liposucción', 'liposuccion'],
};

const normalize = (value) =>
  String(value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

const getText = (item) => item.text || item.textTranslated || item.reviewText || item.translatedText || '';
const getAuthor = (item) => item.name || item.reviewerName || item.author || 'Paciente DERMA.M';
const getRating = (item) => Number(item.stars || item.rating || item.reviewRating || 0);
const getId = (item, index) => String(item.reviewId || item.id || `${getAuthor(item)}-${item.publishedAtDate || item.publishAt || index}`);

const inferTags = (text) => {
  const normalized = normalize(text);
  const tags = Object.entries(tagRules)
    .filter(([, keywords]) => keywords.some((keyword) => normalized.includes(normalize(keyword))))
    .map(([tag]) => tag);

  return tags.length > 0 ? tags : ['general'];
};

const scoreReview = (review) => review.rating * 10000 + review.text.length;

const raw = JSON.parse(await readFile(RAW_PATH, 'utf8'));

const reviews = raw
  .map((item, index) => {
    const text = getText(item).trim();
    const rating = getRating(item);

    if (rating < 4 || !text) return null;

    return {
      id: getId(item, index),
      author: getAuthor(item).trim(),
      rating,
      text,
      tags: inferTags(text),
      featured: false,
    };
  })
  .filter(Boolean);

const featuredIds = new Set();

for (const tag of Object.keys(tagRules)) {
  reviews
    .filter((review) => review.tags.includes(tag))
    .sort((a, b) => scoreReview(b) - scoreReview(a))
    .slice(0, 2)
    .forEach((review) => featuredIds.add(review.id));
}

if (featuredIds.size < 3) {
  reviews
    .filter((review) => review.tags.includes('general') && !featuredIds.has(review.id))
    .sort((a, b) => scoreReview(b) - scoreReview(a))
    .slice(0, 3 - featuredIds.size)
    .forEach((review) => featuredIds.add(review.id));
}

if (featuredIds.size === 0 && reviews.length > 0) {
  featuredIds.add([...reviews].sort((a, b) => scoreReview(b) - scoreReview(a))[0].id);
}

const processed = {
  meta: {
    place_name: 'DERMA.M Skin Health',
    rating: raw.find((item) => Number(item.totalScore))?.totalScore || 4.9,
    total_reviews: raw.find((item) => Number(item.reviewsCount))?.reviewsCount || raw.length,
    source: 'google',
  },
  reviews: reviews.map((review) => ({
    ...review,
    featured: featuredIds.has(review.id),
  })),
};

await writeFile(OUTPUT_PATH, `${JSON.stringify(processed, null, 2)}\n`, 'utf8');

console.log(`Processed ${processed.reviews.length} reviews to ${OUTPUT_PATH}`);
