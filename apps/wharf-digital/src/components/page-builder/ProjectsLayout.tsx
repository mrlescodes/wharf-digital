import Link from 'next/link';
import { css } from 'styled-system/css';

import type { ExpandedLayoutProjects } from '@/lib/sanity/expanded-types';

type ProjectsLayoutProps = ExpandedLayoutProjects;

export const ProjectsLayout = (props: ProjectsLayoutProps) => {
  const { title, projects } = props;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {projects.map((project) => {
        return (
          <div key={project._id} className={css({ mb: 4 })}>
            {project.title && <h2>{project.title}</h2>}

            <Link href={`/work/${project.slug?.current}`}>Read more</Link>
          </div>
        );
      })}
    </section>
  );
};
