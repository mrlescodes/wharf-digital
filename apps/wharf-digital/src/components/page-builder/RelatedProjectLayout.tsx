import Link from 'next/link';
import { css } from 'styled-system/css';

import type { LayoutRelatedProject, Project } from '@/lib/sanity/types';

// Replace project reference with expanded document
type RelatedProjectLayoutProps = Omit<LayoutRelatedProject, 'project'> & {
  project?: Project;
};

export const RelatedProjectLayout = (props: RelatedProjectLayoutProps) => {
  const { title, project } = props;

  if (!project) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      <div key={project._id}>
        {project.title && <h2>{project.title}</h2>}

        <Link href={`/work/${project.slug?.current}`}>Read more</Link>
      </div>
    </section>
  );
};
