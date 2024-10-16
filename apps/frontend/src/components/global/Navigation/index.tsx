import { SettingsQueryResult } from '@/lib/sanity/types';
import { DesktopNavigation } from './DesktopNavigation';

type NavigationProps = {
  data: SettingsQueryResult;
};

export const Navigation = (props: NavigationProps) => {
  const { data } = props;

  return (
    <>
      <DesktopNavigation links={data?.headerMenu?.links ?? []} />
    </>
  );
};
