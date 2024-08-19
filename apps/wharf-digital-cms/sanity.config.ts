import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { visionTool } from '@sanity/vision';

import { singletonSchemaTypes, schemaTypes } from './schemas';
import {
  sanityProjectId,
  sanityDataset,
  sanityStudioTitle,
  sanityStudioPreviewUrl,
  pageStructure,
  singletonPlugin,
} from './utils';

export default defineConfig({
  name: 'default',

  projectId: sanityProjectId,
  dataset: sanityDataset,

  title: sanityStudioTitle,

  plugins: [
    // Customise the presentation of Singleton documents
    structureTool({
      structure: pageStructure(singletonSchemaTypes),
    }),

    visionTool(),

    presentationTool({
      previewUrl: {
        origin: sanityStudioPreviewUrl,
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),

    // Configures the global "new document" button and document actions, to suit Singleton documents
    singletonPlugin(singletonSchemaTypes.map((d) => d.name)),
  ],

  schema: {
    types: [...singletonSchemaTypes, ...schemaTypes],
  },
});
