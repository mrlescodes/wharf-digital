import { SanityLinkType } from '@/lib/sanity/expanded-types';
import { SanityLink } from '@/components/shared/SanityLink';

type DesktopNavigationProps = {
  links: SanityLinkType[];
};

export const DesktopNavigation = (props: DesktopNavigationProps) => {
  const { links } = props;

  if (!links || links.length === 0) {
    return;
  }

  return (
    <nav>
      {links.map((link) => {
        return <SanityLink key={link._key} link={link} />;
      })}
    </nav>
  );
};
