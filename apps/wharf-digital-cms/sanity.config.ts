import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { singletonSchemaTypes, schemaTypes } from './schemas';
import {
  sanityStudioTitle,
  sanityProjectId,
  sanityDataset,
  pageStructure,
  singletonPlugin,
} from './utils';

export default defineConfig({
  name: 'default',

  title: sanityStudioTitle,
  projectId: sanityProjectId,
  dataset: sanityDataset,

  plugins: [
    // Customise the presentation of Singleton documents
    structureTool({
      structure: pageStructure(singletonSchemaTypes),
    }),

    visionTool(),

    // Configures the global "new document" button and document actions, to suit Singleton documents
    singletonPlugin(singletonSchemaTypes.map((d) => d.name)),
  ],

  schema: {
    types: [...singletonSchemaTypes, ...schemaTypes],
  },
});
