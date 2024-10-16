import Link from 'next/link';
import { css } from 'styled-system/css';

import { ExpandedLayoutRelatedProject } from '@/lib/sanity/expanded-types';

type RelatedProjectLayoutProps = ExpandedLayoutRelatedProject;

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
