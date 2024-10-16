import { ExpandedPage } from '@/lib/sanity/expanded-types';
import { PageBuilder } from '../page-builder/PageBuilder';

import { GlobalLayout } from '../global/GlobalLayout';
import { SettingsQueryResult } from '@/lib/sanity/types';

export type PageLayoutProps = {
  page: ExpandedPage;
  settings: SettingsQueryResult;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { page, settings } = props;

  return (
    <GlobalLayout settings={settings}>
      <h1>{page.title}</h1>

      {page.pageBuilder && <PageBuilder layouts={page.pageBuilder} />}
    </GlobalLayout>
  );
};
