// TODO: Not crazy about this implementation but it works. Worth revisiting.
// Initial thoughts are to create custom page / layout / ui types and then just use the query responses to enforce compatibility
// This does decouple the schema from the front end however

import type {
  LayoutAccordion,
  LayoutContent,
  LayoutContentMedia,
  LayoutFeaturedProjects,
  LayoutHero,
  LayoutMedia,
  LayoutMediaGrid,
  LayoutMetrics,
  LayoutPosts,
  LayoutProjectIntro,
  LayoutProjects,
  LayoutRelatedProject,
  Page,
  Post,
  Project,
  Slug,
} from './types';

export type SanityLinkExternal = {
  _key: string;
  _type: 'linkExternal';
  label: string | null;
  url: string | null;
  newWindow: boolean | null;
};

export type SanityLinkInternal = {
  _key: string;
  _type: 'linkInternal';
  label: string | null;
  slug: string | null;
  documentType: 'page' | null;
};

export type SanityLinkType = SanityLinkExternal | SanityLinkInternal;

export type AppNavigation = {
  links: Array<SanityLinkType> | null;
};

export type AppSettings = {
  headerMenu: AppNavigation | null;
};

export type ExpandedLayoutPosts = LayoutPosts & {
  posts: Post[] | null;
};

export type ExpandedLayoutFeaturedProjects = Omit<
  LayoutFeaturedProjects,
  'projects'
> & {
  projects:
    | {
        _id: string;
        _type: 'project';
        title: string | null;
        slug: Slug | null;
      }[]
    | null;
};

export type ExpandedLayoutProjects = LayoutProjects & {
  projects:
    | {
        _id: string;
        _type: 'project';
        title: string | null;
        slug: Slug | null;
      }[]
    | null;
};

export type ExpandedLayoutRelatedProject = Omit<
  LayoutRelatedProject,
  'project'
> & {
  project: {
    _id: string;
    _type: 'project';
    title: string | null;
    slug: Slug | null;
  } | null;
};

export type ExpandedPageBuilder = Array<
  {
    _key: string;
  } & (
    | LayoutAccordion
    | LayoutContentMedia
    | LayoutContent
    | LayoutHero
    | LayoutMediaGrid
    | LayoutMedia
    | LayoutMetrics
    | ExpandedLayoutPosts
    | ExpandedLayoutFeaturedProjects
    | LayoutProjectIntro
    | ExpandedLayoutProjects
    | ExpandedLayoutRelatedProject
  )
>;

export type ExpandedPage = Omit<Page, 'pageBuilder'> & {
  pageBuilder: ExpandedPageBuilder | null;
};

export type ExpandedProject = Omit<Project, 'pageBuilder'> & {
  pageBuilder: ExpandedPageBuilder | null;
};
