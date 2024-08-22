import { Page } from '@/lib/sanity/types';

export type PageLayoutProps = {
  page: Page;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { page } = props;

  return <h1>{page.title}</h1>;
};
