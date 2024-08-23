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
