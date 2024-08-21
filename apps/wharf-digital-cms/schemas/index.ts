// Singletons
import settings from './singletons/settings';

// Objects
import linkInternal from './objects/link-internal';
import linkExternal from './objects/link-external';

// Documents
import navigation from './documents/navigation';
import page from './documents/page';
import post from './documents/post';
import project from './documents/project';
import teamMember from './documents/team-member';

// Modules
import hero from './modules/hero';
import postListing from './modules/post-listing';

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const schemaTypes = [
  // Objects
  linkInternal,
  linkExternal,

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
