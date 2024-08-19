import { css } from 'styled-system/css';

import { Logo } from '@/assets/logo';
import { Layout } from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div
        className={css({
          py: 12,
        })}
      >
        <Logo />

        <p
          className={css({
            marginTop: 4,
          })}
        >
          Crafted Digital Experiences
        </p>
      </div>
    </Layout>
  );
}
