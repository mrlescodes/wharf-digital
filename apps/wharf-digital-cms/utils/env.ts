export const sanityStudioTitle = assertValue(
  process.env.SANITY_STUDIO_SANITY_STUDIO_TITLE,
  'Missing environment variable: SANITY_STUDIO_SANITY_STUDIO_TITLE',
);

export const sanityProjectId = assertValue(
  process.env.SANITY_STUDIO_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_SANITY_PROJECT_ID',
);

export const sanityDataset = assertValue(
  process.env.SANITY_STUDIO_SANITY_DATASET,
  'Missing environment variable: SANITY_STUDIO_SANITY_DATASET',
);

// TODO: Move to shared util lib
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
