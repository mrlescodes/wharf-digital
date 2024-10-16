import { type SanityClient } from 'next-sanity';
import { defineQuery } from 'groq';

import { navigationQuery } from './fragments/navigation';

export const settingsQuery = defineQuery(`
    *[_type == "settings"][0]{
        ...,
        headerMenu->{
            ${navigationQuery}
        }
    }
`);

export async function getSettings(client: SanityClient) {
  return await client.fetch(settingsQuery);
}
