import { PortableText } from 'next-sanity';
import { css } from 'styled-system/css';

import type { LayoutHero } from '@/lib/sanity/types';

type HeroLayoutProps = LayoutHero;

export const HeroLayout = (props: HeroLayoutProps) => {
  const { title, content } = props;

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {content && <PortableText value={content} />}
    </section>
  );
};
