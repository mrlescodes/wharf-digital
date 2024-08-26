import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import {
  getAllPageSlugs,
  getPageBySlug,
  getSettings,
} from '@/lib/sanity/queries';
import { getClient } from '@/lib/sanity/client';
import { sanityReadToken } from '@/lib/sanity/token';
import { ExpandedPage, AppSettings } from '@/lib/sanity/expanded-types';
import type { SharedPageProps } from '@/pages/_app';
import { PageLayout } from '@/components/page/PageLayout';

const PageLayoutPreview = dynamic(
  () => import('@/components/page/PageLayoutPreview'),
);

interface PageProps extends SharedPageProps {
  page: ExpandedPage;
  settings: AppSettings;
}

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { page, settings, draftMode } = props;

  if (draftMode) {
    return <PageLayoutPreview page={page} settings={settings} />;
  }

  return <PageLayout page={page} settings={settings} />;
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

  const [page, settings] = await Promise.all([
    getPageBySlug(client, slug),
    getSettings(client),
  ]);

  if (!page || !settings) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      settings,
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
