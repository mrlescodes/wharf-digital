import { useLiveQuery } from 'next-sanity/preview';

import { postQuery } from '@/lib/sanity/queries';
import { ProjectLayout, ProjectLayoutProps } from './ProjectLayout';

export default function ProjectLayoutPreview(props: ProjectLayoutProps) {
  const [project] = useLiveQuery(props.project, postQuery, {
    slug: props.project.slug?.current,
  });

  return <ProjectLayout project={project} />;
}
