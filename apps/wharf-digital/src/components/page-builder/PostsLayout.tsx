import Link from 'next/link';
import { css } from 'styled-system/css';

import type { ExpandedLayoutPosts } from '@/lib/sanity/expanded-types';

type PostsLayoutProps = ExpandedLayoutPosts;

export const PostsLayout = (props: PostsLayoutProps) => {
  const { title, posts } = props;

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {posts.map((post) => {
        return (
          <div key={post._id} className={css({ mb: 4 })}>
            {post.title && <h2>{post.title}</h2>}

            <Link href={`/blog/${post.slug?.current}`}>Read more</Link>
          </div>
        );
      })}
    </section>
  );
};
