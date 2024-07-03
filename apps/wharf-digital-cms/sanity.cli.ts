import { defineCliConfig } from 'sanity/cli';

import { sanityStudioProjectId, sanityStudioDataset } from './utils';

export default defineCliConfig({
  api: {
    projectId: sanityStudioProjectId,
    dataset: sanityStudioDataset,
  },
});
