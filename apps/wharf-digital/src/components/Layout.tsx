import { css } from 'styled-system/css';

import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
      })}
    >
      <Header />

      <main
        className={css({
          flex: 1,
        })}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};
