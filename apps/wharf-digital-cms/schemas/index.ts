// Singletons
import settings from './singletons/settings';

// Documents
import page from './documents/page';
import post from './documents/post';
import project from './documents/project';

// Modules
import hero from './modules/hero';
import postListing from './modules/post-listing.js';

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const schemaTypes = [
  // Documents
  page,
  post,
  project,

  // Modules
  hero,
  postListing,
];
