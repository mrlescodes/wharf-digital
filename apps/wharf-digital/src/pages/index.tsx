import { css } from 'styled-system/css';

import { Logo } from '@/assets/logo';

export default function HomePage() {
  return (
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
  );
}
