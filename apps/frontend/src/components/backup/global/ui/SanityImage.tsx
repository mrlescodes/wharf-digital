import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';
import { css } from 'styled-system/css';

import { urlFor } from '@/lib/sanity/image';

type SanityImageProps = {
  image?: SanityImageSource;
};

export const SanityImage = (props: SanityImageProps) => {
  const { image } = props;

  if (!image) {
    return null;
  }

  // @ts-expect-error library type definition mismatch
  const dimensions = getImageDimensions(image);

  const imageUrl = urlFor(image).url();
  const blurUrl = urlFor(image).width(20).quality(20).url();

  return (
    <Image
      src={imageUrl}
      placeholder="blur"
      blurDataURL={blurUrl}
      width={dimensions.width}
      height={dimensions.height}
      className={css({
        width: '100%',
        height: 'auto',
      })}
      sizes="100vw"
      alt=""
    />
  );
};
