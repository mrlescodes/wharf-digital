import { defineQuery } from "groq";

import { linkInternalQueryFragment } from "./link-internal";
import { linkExternalQueryFragment } from "./link-external";

// @sanity-typegen-ignore
export const linkQueryFragment = defineQuery(`
  _type == 'linkInternal' => {
    ${linkInternalQueryFragment}
  },
  _type == 'linkExternal' => {
    ${linkExternalQueryFragment}
  }
`);
