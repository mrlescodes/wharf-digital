import { defineQuery } from "groq";

// @sanity-typegen-ignore
export const linkInternalQueryFragment = defineQuery(`
  _key,
  _type,
  label,
  'slug':reference->slug.current,
  'documentType':reference->_type,
`);
