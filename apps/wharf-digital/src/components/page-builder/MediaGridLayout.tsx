import { css } from 'styled-system/css';

import type { LayoutMediaGrid } from '@/lib/sanity/types';
import { SanityImage } from '@/components/shared/SanityImage';

type MediaGridLayoutProps = LayoutMediaGrid;

export const MediaGridLayout = (props: MediaGridLayoutProps) => {
  const { items } = props;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {items.map((item) => {
        return <SanityImage key={item._key} image={item} />;
      })}
    </section>
  );
};
