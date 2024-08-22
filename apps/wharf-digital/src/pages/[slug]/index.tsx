import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { getAllPageSlugs, getPageBySlug } from '@/lib/sanity/queries';
import { getClient } from '@/lib/sanity/client';
import { sanityReadToken } from '@/lib/sanity/token';
import type { Page } from '@/lib/sanity/types';

import type { SharedPageProps } from '@/pages/_app';
import { PageLayout } from '@/components/page/PageLayout';

const PageLayoutPreview = dynamic(
  () => import('@/components/page/PageLayoutPreview')
);

interface PageProps extends SharedPageProps {
  page: Page;
}

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { page, draftMode } = props;

  if (draftMode) {
    return <PageLayoutPreview page={page} />;
  }

  return <PageLayout page={page} />;
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

  const response = await getPageBySlug(client, slug);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: response,
      draftMode,
      token: draftMode ? sanityReadToken : '',
    },
  };
}) satisfies GetStaticProps<PageProps>;

export const getStaticPaths = async () => {
  const slugs = await getAllPageSlugs();

  return {
    paths: slugs.map((slug) => `/${slug}`),
    fallback: 'blocking',
  };
};
