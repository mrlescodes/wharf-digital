import { css } from 'styled-system/css';

import type { LayoutMedia } from '@/lib/sanity/types';
import { SanityImage } from '../SanityImage';

type MediaLayoutProps = LayoutMedia;

export const MediaLayout = (props: MediaLayoutProps) => {
  const { media } = props;

  return (
    <section className={css({ py: 10 })}>
      <SanityImage image={media} />
    </section>
  );
};
