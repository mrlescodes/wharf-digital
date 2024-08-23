import { ComponentType } from 'react';

import type { PageBuilder as PageBuilderLayouts } from '@/lib/sanity/types';

import { AccordionLayout } from './AccordionLayout';
import { ContentMediaLayout } from './ContentMediaLayout';
import { ContentLayout } from './ContentLayout';
import { HeroLayout } from './HeroLayout';
import { MediaGridLayout } from './MediaGridLayout';
import { MediaLayout } from './MediaLayout';
import { MetricsLayout } from './MetricsLayout';
import { PostsLayout } from './PostsLayout';
import { FeaturedProjectsLayout } from './FeaturedProjectsLayout';
import { ProjectIntroLayout } from './ProjectIntroLayout';
import { ProjectsLayout } from './ProjectsLayout';
import { RelatedProjectLayout } from './RelatedProjectLayout';

type LayoutType = PageBuilderLayouts[number]['_type'];

const layoutMap: Record<LayoutType, ComponentType<any>> = {
  'layout.accordion': AccordionLayout,
  'layout.contentMedia': ContentMediaLayout,
  'layout.content': ContentLayout,
  'layout.hero': HeroLayout,
  'layout.mediaGrid': MediaGridLayout,
  'layout.media': MediaLayout,
  'layout.metrics': MetricsLayout,
  'layout.posts': PostsLayout,
  'layout.featuredProjects': FeaturedProjectsLayout,
  'layout.projectIntro': ProjectIntroLayout,
  'layout.projects': ProjectsLayout,
  'layout.relatedProject': RelatedProjectLayout,
};

export type PageBuilderProps = {
  layouts: PageBuilderLayouts;
};

export const PageBuilder = (props: PageBuilderProps) => {
  const { layouts } = props;

  if (!layouts || layouts.length === 0) {
    return null;
  }

  return (
    <div>
      {layouts.map((layout) => {
        const PageBuilderLayout = layoutMap[layout._type];

        return <PageBuilderLayout key={layout._key} {...layout} />;
      })}
    </div>
  );
};
