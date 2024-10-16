import { PortableText } from 'next-sanity';
import { css } from 'styled-system/css';

import type { LayoutContent } from '@/lib/sanity/types';

type ContentLayoutProps = LayoutContent;

export const ContentLayout = (props: ContentLayoutProps) => {
  const { title, content } = props;

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {content && <PortableText value={content} />}
    </section>
  );
};
