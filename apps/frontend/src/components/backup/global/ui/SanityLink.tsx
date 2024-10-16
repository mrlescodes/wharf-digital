import {
  SanityLinkExternal,
  SanityLinkInternal,
} from '@/lib/sanity/expanded-types';

import { resolveHref } from '@/lib/sanity/utils';
import Link from 'next/link';

type SanityLink = {
  link: SanityLinkInternal | SanityLinkExternal;
};

export const SanityLink = (props: SanityLink) => {
  const { link } = props;

  if (!link) {
    return;
  }

  if (link._type === 'linkExternal') {
    if (!link.url) {
      return null;
    }

    return <a href={link.url}>{link?.label ?? 'Visit'}</a>;
  }

  if (link._type === 'linkInternal') {
    const href = resolveHref(link?.documentType, link?.slug);

    if (!href) {
      return null;
    }

    return <Link href={href}>{link.label}</Link>;
  }
};
