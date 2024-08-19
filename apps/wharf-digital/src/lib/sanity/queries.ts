import { defineQuery } from 'groq';

// prettier-ignore
export const postsQuery = defineQuery(`*[_type == "post" && defined(slug)]`);

// prettier-ignore
export const postSlugsQuery = defineQuery(`*[_type == "post" && defined(slug.current)][].slug.current`);

// prettier-ignore
export const postQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0]`);
