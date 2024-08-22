import { useLiveQuery } from 'next-sanity/preview';

import { postQuery } from '@/lib/sanity/queries';

import { PostLayout, PostLayoutProps } from './PostLayout';

export default function PostLayoutPreview(props: PostLayoutProps) {
  const [post] = useLiveQuery(props.post, postQuery, {
    slug: props.post.slug?.current,
  });

  return <PostLayout post={post} />;
}
