import 'server-only';

import { experimental_taintUniqueValue } from 'react';

import { assertValue } from './utils';

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-27';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  process.env.SANITY_API_READ_TOKEN,
  'Missing environment variable: SANITY_API_READ_TOKEN'
);

experimental_taintUniqueValue(
  'Do not pass the sanity API read token to the client.',
  process,
  token
);

export const useCdn = false;

const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : '';

export const WEBAPP_URL = VERCEL_URL || 'http://localhost:3000';
