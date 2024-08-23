import { ExpandedProject } from '@/lib/sanity/expanded-types';
import { PageBuilder } from '../page-builder/PageBuilder';

export type ProjectLayoutProps = {
  project: ExpandedProject;
};

export const ProjectLayout = (props: ProjectLayoutProps) => {
  const { project } = props;

  return (
    <>
      <h1>{project.title}</h1>

      {project.pageBuilder && <PageBuilder layouts={project.pageBuilder} />}
    </>
  );
};
