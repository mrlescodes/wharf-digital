import { SettingsQueryResult } from '@/lib/sanity/types';
import { Navigation } from './Navigation';

type GlobalLayoutProps = {
  settings: SettingsQueryResult;
  children: React.ReactNode;
};

export const GlobalLayout = (props: GlobalLayoutProps) => {
  const { settings, children } = props;

  return (
    <>
      <Navigation data={settings} />

      <main>{children}</main>
    </>
  );
};
