import { SanityLink } from '@/components/shared/SanityLink';
import { SanityLinkType } from '@/lib/sanity/expanded-types';

import { css } from 'styled-system/css';

type NavbarProps = {
  links: SanityLinkType[];
};

export const Navbar = (props: NavbarProps) => {
  const { links } = props;

  if (!links || links.length === 0) {
    return;
  }

  return (
    <nav>
      {links.map((link) => {
        return (
          <div key={link._key} className={css({ ml: 5 })}>
            <SanityLink link={link} />
          </div>
        );
      })}
    </nav>
  );
};
