// Singletons
import settings from "./singletons/settings";

// Objects
import linkExternal from "./objects/link-external";
import linkInternal from "./objects/link-internal";

// Sections
import sections from "./sections/sections";
import accordion from "./sections/core/accordion";
import contentMedia from "./sections/core/content-media";
import content from "./sections/core/content";
import hero from "./sections/core/hero";
import mediaGrid from "./sections/core/media-grid";
import media from "./sections/core/media";
import metrics from "./sections/core/metrics";

// Documents
import page from "./documents/page";
import post from "./documents/post";
import project from "./documents/project";

export const singletonSchemaTypes = [
  // Singletons
  settings,
];

export const pageSchemaTypes = [page];

export const schemaTypes = [
  // Objects
  linkExternal,
  linkInternal,

  // Sections
  sections,
  accordion,
  contentMedia,
  content,
  hero,
  mediaGrid,
  media,
  metrics,

  // Documents
  post,
  project,
];
