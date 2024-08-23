import { defineField, defineType } from 'sanity';
import { Link } from 'lucide-react';

export default defineType({
  name: 'linkInternal',
  title: 'Internal Link',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      label: 'label',
      slug: 'reference.slug.current',
    },
    prepare(selection) {
      const { label, slug } = selection;

      const subtitle = [];
      if (slug) {
        subtitle.push(`→ ${slug === 'index' ? '/' : `/${slug}`}`);
      }

      return {
        title: label,
        subtitle: subtitle.join(' '),
      };
    },
  },
});
