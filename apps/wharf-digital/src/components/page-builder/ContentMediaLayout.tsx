import { PortableText } from 'next-sanity';
import { css } from 'styled-system/css';

import type { LayoutContentMedia } from '@/lib/sanity/types';
import { SanityImage } from '@/components/shared/SanityImage';

type ContentMediaLayoutProps = LayoutContentMedia;

export const ContentMediaLayout = (props: ContentMediaLayoutProps) => {
  const { title, content, media } = props;

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {content && <PortableText value={content} />}

      <SanityImage image={media} />
    </section>
  );
};
