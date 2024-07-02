// Singletons
import settings from './singletons/settings';

// Documents
import page from './documents/page';
import post from './documents/post';
import project from './documents/project';

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const schemaTypes = [
  // Documents
  page,
  post,
  project,
];
