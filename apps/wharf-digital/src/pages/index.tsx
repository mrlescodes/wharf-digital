import { css } from 'styled-system/css';

import { Logo } from '@/assets/logo';

export default function HomePage() {
  return (
    <div
      className={css({
        background: 'black',
        height: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      })}
    >
      <Logo />

      <p
        className={css({
          color: 'white',
          marginTop: 4,
        })}
      >
        Crafted Digital Experiences
      </p>
    </div>
  );
}
