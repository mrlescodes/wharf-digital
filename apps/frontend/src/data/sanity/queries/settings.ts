import { type SanityClient } from "next-sanity";
import { defineQuery } from "groq";

import { linkQueryFragment } from "./fragments/link";

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    header {
      "navigationItems": coalesce(
        navigationItems[]{
          ${linkQueryFragment}
        },
        []
      )
    },
    intro,
    tiles[] {
      _key,
      'slug':reference->slug.current,
      label,
      image,
      colorScheme
    }
  }
`);

export async function getSettings(client: SanityClient) {
  return await client.fetch(settingsQuery);
}
