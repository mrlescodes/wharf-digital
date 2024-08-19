import { defineField, defineType } from 'sanity';
import { Link } from 'lucide-react';

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'internal', value: 'internal' },
          { title: 'external', value: 'external' },
        ],
      },
    }),
    defineField({
      name: 'internal',
      title: 'Internal',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent }) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      title: 'External',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
      hidden: ({ parent }) => parent?.type !== 'external',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      title: 'internal.title',
      slug: 'internal.slug.current',
      external: 'external',
    },
    prepare: ({ label, title, slug, external }) => ({
      title: label || title,
      subtitle: [external || (slug && (slug === 'index' ? '/' : `/${slug}`))]
        .filter(Boolean)
        .join(''),
    }),
  },
});
