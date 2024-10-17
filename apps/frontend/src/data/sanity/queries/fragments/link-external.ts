import { defineQuery } from "groq";

// @sanity-typegen-ignore
export const linkExternalQueryFragment = defineQuery(`
  _key,
  _type,
  label,
  url,
  newWindow
`);
