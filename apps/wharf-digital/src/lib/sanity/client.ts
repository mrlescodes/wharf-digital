import { createClient, type SanityClient } from 'next-sanity';

import {
  sanityProjectId,
  sanityDataset,
  sanityApiVersion,
  sanityStudioUrl,
} from '../env';

import { postQuery, postSlugsQuery, postsQuery } from './queries';

export function getClient(previewToken?: string) {
  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: !previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
    stega: {
      enabled: previewToken ? true : false,
      studioUrl: sanityStudioUrl,
    },
    token: previewToken,
  });
}

export async function getPosts(client: SanityClient) {
  return await client.fetch(postsQuery);
}

export async function getAllPostsSlugs() {
  const client = getClient();
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.filter((value) => value != null);
}

export async function getPostBySlug(client: SanityClient, slug: string) {
  return await client.fetch(postQuery, { slug });
}
