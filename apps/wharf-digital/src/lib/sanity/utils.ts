import { SanityLinkInternal } from './expanded-types';

export function resolveHref(link: SanityLinkInternal) {
  switch (link.documentType) {
    case 'page':
      return link.slug ? `/${link.slug}` : undefined;
    default:
      console.warn('Invalid document type:', link.documentType);
      return undefined;
  }
}
