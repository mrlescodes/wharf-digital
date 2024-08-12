// Singletons
import settings from './singletons/settings';

// Objects
import link from './objects/link';

// Documents
import navigation from './documents/navigation';
import page from './documents/page';
import post from './documents/post';
import project from './documents/project';
import teamMember from './documents/team-member';

// Modules
import hero from './modules/hero';
import postListing from './modules/post-listing.js';

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const schemaTypes = [
  // Objects
  link,

  // Documents
  navigation,
  page,
  post,
  project,
  teamMember,

  // Modules
  hero,
  postListing,
];
