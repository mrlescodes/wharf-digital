import { defineQuery } from 'groq';

import { linksQuery } from './links';

// @sanity-typegen-ignore
export const navigationQuery = defineQuery(`
    ...,
    links[]{
        ${linksQuery}
	}
`);
