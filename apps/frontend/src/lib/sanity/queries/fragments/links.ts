import { defineQuery } from 'groq';

import { linkInternalQuery } from './link-internal';
import { linkExternalQuery } from './link-external';

// @sanity-typegen-ignore
export const linksQuery = defineQuery(`
    _type == 'linkInternal' => {
        ${linkInternalQuery}
    },
    _type == 'linkExternal' => {
        ${linkExternalQuery}
    }
`);
