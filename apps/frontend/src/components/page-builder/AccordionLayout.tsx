import { PortableText } from 'next-sanity';
import { css } from 'styled-system/css';

import type { LayoutAccordion } from '@/lib/sanity/types';

type AccordionLayoutProps = LayoutAccordion;

export const AccordionLayout = (props: AccordionLayoutProps) => {
  const { title, intro, items } = props;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={css({ py: 10 })}>
      {title && <h1>{title}</h1>}

      {intro && <PortableText value={intro} />}

      {items.map((item) => {
        return (
          <div key={item._key}>
            {item.title && <h2>{item.title}</h2>}

            {item.content && <PortableText value={item.content} />}
          </div>
        );
      })}
    </section>
  );
};
