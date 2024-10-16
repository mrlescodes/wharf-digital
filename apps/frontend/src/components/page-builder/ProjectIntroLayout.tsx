import { PortableText } from 'next-sanity';
import { css } from 'styled-system/css';

import type { LayoutProjectIntro } from '@/lib/sanity/types';

type ProjectIntroLayoutProps = LayoutProjectIntro;

export const ProjectIntroLayout = (props: ProjectIntroLayoutProps) => {
  const { title, content } = props;

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {content && <PortableText value={content} />}
    </section>
  );
};
