import { Post } from '@/lib/sanity/types';

export type PostLayoutProps = {
  post: Post;
};

export const PostLayout = (props: PostLayoutProps) => {
  const { post } = props;

  return <h1>{post.title}</h1>;
};
