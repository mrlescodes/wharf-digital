import { ExpandedPageBuilder } from '@/lib/sanity/expanded-types';
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

export type PageBuilderProps = {
  layouts: ExpandedPageBuilder;
};

export const PageBuilder = (props: PageBuilderProps) => {
  const { layouts } = props;

  if (!layouts || layouts.length === 0) {
    return null;
  }

  return (
    <div>
      {layouts.map((layout) => {
        switch (layout._type) {
          case 'layout.accordion':
            return <AccordionLayout key={layout._key} {...layout} />;

          case 'layout.contentMedia':
            return <ContentMediaLayout key={layout._key} {...layout} />;

          case 'layout.content':
            return <ContentLayout key={layout._key} {...layout} />;

          case 'layout.hero':
            return <HeroLayout key={layout._key} {...layout} />;

          case 'layout.mediaGrid':
            return <MediaGridLayout key={layout._key} {...layout} />;

          case 'layout.media':
            return <MediaLayout key={layout._key} {...layout} />;

          case 'layout.metrics':
            return <MetricsLayout key={layout._key} {...layout} />;

          case 'layout.posts':
            return <PostsLayout key={layout._key} {...layout} />;

          case 'layout.featuredProjects':
            return <FeaturedProjectsLayout key={layout._key} {...layout} />;

          case 'layout.projectIntro':
            return <ProjectIntroLayout key={layout._key} {...layout} />;

          case 'layout.projects':
            return <ProjectsLayout key={layout._key} {...layout} />;

          case 'layout.relatedProject':
            return <RelatedProjectLayout key={layout._key} {...layout} />;
        }
      })}
    </div>
  );
};
