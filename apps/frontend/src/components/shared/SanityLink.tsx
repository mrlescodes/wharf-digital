import { SanityLinkType } from '@/lib/sanity/expanded-types';

import { resolveHref } from '@/lib/sanity/utils';
import Link from 'next/link';

type SanityLinkProps = {
  link: SanityLinkType;
};

export const SanityLink = (props: SanityLinkProps) => {
  const { link } = props;

  if (!link) {
    return;
  }

  if (link._type === 'linkExternal') {
    if (!link.url) {
      return null;
    }

    return <a href={link.url}>{link.label}</a>;
  }

  if (link._type === 'linkInternal') {
    const href = resolveHref(link);

    if (!href) {
      return null;
    }

    return <Link href={href}>{link.label}</Link>;
  }
};
