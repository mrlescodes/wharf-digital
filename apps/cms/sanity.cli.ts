import { defineCliConfig } from 'sanity/cli';

import { sanityProjectId, sanityDataset } from './utils';

export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  },
});
