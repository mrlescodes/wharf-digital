import { useLiveQuery } from 'next-sanity/preview';

import { postQuery } from '@/lib/sanity/queries';

import { PageLayout, PageLayoutProps } from './PageLayout';

export default function PageLayoutPreview(props: PageLayoutProps) {
  const [page] = useLiveQuery(props.page, postQuery, {
    slug: props.page.slug?.current,
  });

  return <PageLayout page={page} />;
}
