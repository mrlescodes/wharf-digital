import { type SanityClient } from "next-sanity";
import { defineQuery } from "groq";

import { getClient } from "../client";

/**
 * Posts Page
 */
export const postsPageQuery = defineQuery(`
  *[_type == "postsPage" ][0]{
    ...,
    "posts": *[_type == "post" && defined(slug.current)]
  }
`);

export async function getPostsPage(client: SanityClient) {
  return await client.fetch(postsPageQuery);
}

/**
 * Posts
 */
export const postsQuery = defineQuery(`
  *[_type == "post" && defined(slug)]
`);

export async function getPosts(client: SanityClient) {
  return await client.fetch(postsQuery);
}

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)][].slug.current
`);

export async function getAllPostSlugs() {
  const client = getClient();
  const slugs = await client.fetch(postSlugsQuery);
  return slugs.filter((value) => value != null);
}

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]
`);

export async function getPostBySlug(client: SanityClient, slug: string) {
  return await client.fetch(postQuery, { slug });
}
