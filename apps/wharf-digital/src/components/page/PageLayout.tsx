import { Page } from '@/lib/sanity/types';
import { PageBuilder } from '../page-builder/PageBuilder';

export type PageLayoutProps = {
  page: Page;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { page } = props;

  return (
    <>
      <h1>{page.title}</h1>

      {page.pageBuilder && <PageBuilder layouts={page.pageBuilder} />}
    </>
  );
};
