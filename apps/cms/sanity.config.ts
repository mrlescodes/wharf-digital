import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";

import { env } from "./env";
import { singletonPlugin } from "./plugins/singleton";
import { structureBuilder } from "./plugins/structure";
import { singletonSchemaTypes, pageSchemaTypes, schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: env.SANITY_STUDIO_SANITY_STUDIO_TITLE,

  projectId: env.SANITY_STUDIO_SANITY_PROJECT_ID,
  dataset: env.SANITY_STUDIO_SANITY_DATASET,

  plugins: [
    singletonPlugin(singletonSchemaTypes.map((d) => d.name)),

    structureTool({
      structure: structureBuilder(singletonSchemaTypes, pageSchemaTypes),
    }),

    visionTool(),

    presentationTool({
      previewUrl: {
        origin: env.SANITY_STUDIO_SANITY_STUDIO_PREVIEW_URL,
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],

  schema: {
    types: [...singletonSchemaTypes, ...pageSchemaTypes, ...schemaTypes],
  },
});
