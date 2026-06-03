import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const APIFY_ACTOR_ID = 'compass~google-maps-reviews-scraper';
const DERMA_M_GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/DERMA.M/@26.6627718,-80.058463,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d7a4252e99f3:0x1b35234db1ddfa5c!8m2!3d26.6627718!4d-80.0558881!16s%2Fg%2F11qh1lr84l?entry=ttu';
const OUTPUT_PATH = fileURLToPath(new URL('../src/data/reviews-raw.json', import.meta.url));

const token = process.env.APIFY_TOKEN;

if (!token) {
  throw new Error('APIFY_TOKEN is required. Put it in .env or set it as an environment variable.');
}

const input = {
  startUrls: [{ url: DERMA_M_GOOGLE_MAPS_URL }],
  reviewsSort: 'newest',
  reviewsOrigin: 'google',
  language: 'en',
  personalData: true,
};

const endpoint = `https://api.apify.com/v2/acts/${APIFY_ACTOR_ID}/run-sync-get-dataset-items?token=${encodeURIComponent(token)}&timeout=300`;

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(input),
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`Apify request failed (${response.status}): ${body}`);
}

const reviews = await response.json();

await mkdir(dirname(OUTPUT_PATH), { recursive: true });
await writeFile(OUTPUT_PATH, `${JSON.stringify(reviews, null, 2)}\n`, 'utf8');

console.log(`Saved ${reviews.length} raw Google reviews to ${OUTPUT_PATH}`);
