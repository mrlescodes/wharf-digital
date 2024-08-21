import { type SanityClient } from 'next-sanity';
import { defineQuery } from 'groq';

import { getClient } from '../client';

export const projectsQuery = defineQuery(`
    *[_type == "project" && defined(slug)]
`);

export async function getProjects(client: SanityClient) {
  return await client.fetch(projectsQuery);
}

export const projectSlugsQuery = defineQuery(`
    *[_type == "project" && defined(slug.current)][].slug.current
`);

export async function getAllProjectSlugs() {
  const client = getClient();
  const slugs = await client.fetch(projectSlugsQuery);
  return slugs.filter((value) => value != null);
}

export const projectQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]
`);

export async function getProjectBySlug(client: SanityClient, slug: string) {
  return await client.fetch(projectQuery, { slug });
}
