import { AppNavigation } from '@/lib/sanity/expanded-types';
import { Navbar } from './Navbar';

type HeaderProps = {
  headerMenu: AppNavigation | null;
};

export const Header = (props: HeaderProps) => {
  const { headerMenu } = props;

  return (
    <header>
      <Navbar links={headerMenu?.links ?? []} />
    </header>
  );
};
