import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { getAllProjectSlugs, getProjectBySlug } from '@/lib/sanity/queries';
import { getClient } from '@/lib/sanity/client';
import { sanityReadToken } from '@/lib/sanity/token';
import type { Project } from '@/lib/sanity/types';
import { ExpandedProject } from '@/lib/sanity/expanded-types';
import type { SharedPageProps } from '@/pages/_app';
import { ProjectLayout } from '@/components/project/ProjectLayout';

const ProjectLayoutPreview = dynamic(
  () => import('@/components/project/ProjectLayoutPreview'),
);

interface ProjectProps extends SharedPageProps {
  project: ExpandedProject;
}

export default function Project(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { project, draftMode } = props;

  if (draftMode) {
    return <ProjectLayoutPreview project={project} />;
  }

  return <ProjectLayout project={project} />;
}

export const getStaticProps = (async (context) => {
  const { params = {}, draftMode = false } = context;

  // Check if slug is present and is a string
  const slug = typeof params.slug === 'string' ? params.slug : undefined;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const client = getClient(draftMode ? sanityReadToken : undefined);

  const response = await getProjectBySlug(client, slug);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project: response,
      draftMode,
      token: draftMode ? sanityReadToken : '',
    },
  };
}) satisfies GetStaticProps<ProjectProps>;

export const getStaticPaths = async () => {
  const slugs = await getAllProjectSlugs();

  return {
    paths: slugs.map((slug) => `/work/${slug}`),
    fallback: 'blocking',
  };
};
