import { createClient } from 'next-sanity';

import {
  sanityProjectId,
  sanityDataset,
  sanityApiVersion,
  sanityStudioUrl,
} from '../env';

export function getClient(previewToken?: string) {
  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: !previewToken,
    perspective: previewToken ? 'previewDrafts' : 'published',
    stega: {
      enabled: previewToken ? true : false,
      studioUrl: sanityStudioUrl,
    },
    token: previewToken,
  });
}
