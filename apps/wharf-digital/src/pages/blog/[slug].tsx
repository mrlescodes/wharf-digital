import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { getAllPostSlugs, getPostBySlug } from '@/lib/sanity/queries';
import { getClient } from '@/lib/sanity/client';
import { sanityReadToken } from '@/lib/sanity/token';
import type { Post } from '@/lib/sanity/types';

import type { SharedPageProps } from '@/pages/_app';
import { PostLayout } from '@/components/post/PostLayout';

const PostLayoutPreview = dynamic(
  () => import('@/components/post/PostLayoutPreview')
);

interface PostProps extends SharedPageProps {
  post: Post;
}

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { post, draftMode } = props;

  if (draftMode) {
    return <PostLayoutPreview post={post} />;
  }

  return <PostLayout post={post} />;
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

  const response = await getPostBySlug(client, slug);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response,
      draftMode,
      token: draftMode ? sanityReadToken : '',
    },
  };
}) satisfies GetStaticProps<PostProps>;

export const getStaticPaths = async () => {
  const slugs = await getAllPostSlugs();

  return {
    paths: slugs.map((slug) => `/blog/${slug}`),
    fallback: 'blocking',
  };
};
