import { type SanityClient } from "next-sanity";
import { defineQuery } from "groq";

import { getClient } from "../client";

/**
 * Generic Page
 */
export const pageSlugsQuery = defineQuery(`
  *[_type == "page" && defined(slug.current)][].slug.current
`);

export async function getAllPageSlugs() {
  const client = getClient();
  const slugs = await client.fetch(pageSlugsQuery);
  return slugs.filter((value) => value != null);
}

export const pageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]
`);

export async function getPageBySlug(client: SanityClient, slug: string) {
  return await client.fetch(pageQuery, { slug });
}

/**
 * About Page
 */
export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage" ][0]
`);

export async function getAboutPage(client: SanityClient) {
  return await client.fetch(aboutPageQuery);
}

/**
 * Contact Page
 */
export const contactPageQuery = defineQuery(`
  *[_type == "contactPage" ][0]
`);

export async function getContactPage(client: SanityClient) {
  return await client.fetch(contactPageQuery);
}
