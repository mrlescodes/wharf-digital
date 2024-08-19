// Simplify typing by removing undefined possibility as an error will always be thrown
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN || '';

if (!process.env.SANITY_API_READ_TOKEN) {
  throw new Error('Missing SANITY_API_READ_TOKEN');
}
