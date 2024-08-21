import { type SanityClient } from 'next-sanity';
import { defineQuery } from 'groq';

export const pageQuery = defineQuery(`
    *[_type == "page" && slug.current == $slug][0]
`);

export async function getPageBySlug(client: SanityClient, slug: string) {
  return await client.fetch(pageQuery, { slug });
}
