import { defineQuery } from 'groq';

// @sanity-typegen-ignore
export const linkInternalQuery = defineQuery(`
    _key,
    _type,
    label,
    'slug':reference->slug.current,
    'documentType':reference->_type,
`);
