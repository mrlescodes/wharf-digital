import { AppSettings } from '@/lib/sanity/expanded-types';
import { Footer } from './Footer';
import { Header } from './Header';

type UIShellProps = {
  settings: AppSettings | null;
  children: React.ReactNode;
};

export const UIShell = (props: UIShellProps) => {
  const { settings, children } = props;

  return (
    <>
      <Header headerMenu={settings?.headerMenu ?? null} />

      <main>{children}</main>

      <Footer />
    </>
  );
};
