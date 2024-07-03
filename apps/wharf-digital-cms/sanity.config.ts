import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { singletonSchemaTypes, schemaTypes } from './schemas';
import {
  sanityStudioTitle,
  sanityStudioProjectId,
  sanityStudioDataset,
  pageStructure,
  singletonPlugin,
} from './utils';

export default defineConfig({
  name: 'default',

  title: sanityStudioTitle,
  projectId: sanityStudioProjectId,
  dataset: sanityStudioDataset,

  plugins: [
    // Customise the presentation of Singleton documents
    structureTool({
      structure: pageStructure(singletonSchemaTypes),
    }),

    // Configures the global "new document" button and document actions, to suit Singleton documents
    singletonPlugin(singletonSchemaTypes.map((d) => d.name)),
  ],

  schema: {
    types: [...singletonSchemaTypes, ...schemaTypes],
  },
});
