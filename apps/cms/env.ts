import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "SANITY_STUDIO_",

  client: {
    SANITY_STUDIO_SANITY_PROJECT_ID: z.string().min(1),
    SANITY_STUDIO_SANITY_DATASET: z.string().min(1),
    SANITY_STUDIO_SANITY_STUDIO_TITLE: z.string().min(1),
    SANITY_STUDIO_SANITY_STUDIO_PREVIEW_URL: z
      .string()
      .url()
      .default("http://localhost:3000"),
  },

  runtimeEnv: {
    SANITY_STUDIO_SANITY_PROJECT_ID:
      process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
    SANITY_STUDIO_SANITY_DATASET: process.env.SANITY_STUDIO_SANITY_DATASET,
    SANITY_STUDIO_SANITY_STUDIO_TITLE:
      process.env.SANITY_STUDIO_SANITY_STUDIO_TITLE,
    SANITY_STUDIO_SANITY_STUDIO_PREVIEW_URL:
      process.env.SANITY_STUDIO_SANITY_STUDIO_PREVIEW_URL,
  },
});
