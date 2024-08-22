import { Project } from '@/lib/sanity/types';

export type ProjectLayoutProps = {
  project: Project;
};

export const ProjectLayout = (props: ProjectLayoutProps) => {
  const { project } = props;

  return <h1>{project.title}</h1>;
};
