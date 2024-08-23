import { defineQuery } from 'groq';

// @sanity-typegen-ignore
export const linkExternalQuery = defineQuery(`
    _key,
    _type,
    label,
    url,
    newWindow
`);
