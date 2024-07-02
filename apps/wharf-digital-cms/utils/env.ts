export const sanityStudioTitle = assertValue(
  process.env.SANITY_STUDIO_TITLE,
  'Missing environment variable: SANITY_STUDIO_TITLE',
);

export const sanityStudioProjectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID',
);

export const sanityStudioDataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'Missing environment variable: SANITY_STUDIO_DATASET',
);

// TODO: Move to shared util lib
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
