// Singletons
import settings from './singletons/settings';

// Objects
import linkInternal from './objects/link-internal';
import linkExternal from './objects/link-external';
import pageBuilder from './objects/page-builder';

// Layouts (core)
import accordion from './objects/layouts/core/accordion';
import contentMedia from './objects/layouts/core/content-media';
import content from './objects/layouts/core/content';
import hero from './objects/layouts/core/hero';
import mediaGrid from './objects/layouts/core/media-grid';
import media from './objects/layouts/core/media';
import metrics from './objects/layouts/core/metrics';

// Layouts (post)
import posts from './objects/layouts/post/posts';

// Layouts (project)
import featuredProjects from './objects/layouts/project/featured-projects';
import projectIntro from './objects/layouts/project/project-intro';
import projects from './objects/layouts/project/projects';
import relatedProject from './objects/layouts/project/related-project';

// Documents
import navigation from './documents/navigation';
import page from './documents/page';
import post from './documents/post';
import project from './documents/project';
import teamMember from './documents/team-member';

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const schemaTypes = [
  // Objects
  linkExternal,
  linkInternal,
  pageBuilder,

  // Layouts (core)
  accordion,
  contentMedia,
  content,
  hero,
  mediaGrid,
  media,
  metrics,

  // Layouts (post)
  posts,

  // Layouts (project)
  featuredProjects,
  projectIntro,
  projects,
  relatedProject,

  // Documents
  navigation,
  page,
  post,
  project,
  teamMember,
];
