import { AppSettings, ExpandedPage } from '@/lib/sanity/expanded-types';
import { PageBuilder } from '../page-builder/PageBuilder';
import { UIShell } from '../global/UIShell';

export type PageLayoutProps = {
  page: ExpandedPage;
  settings: AppSettings;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { page, settings } = props;

  return (
    <UIShell settings={settings}>
      <h1>{page.title}</h1>

      {page.pageBuilder && <PageBuilder layouts={page.pageBuilder} />}
    </UIShell>
  );
};
