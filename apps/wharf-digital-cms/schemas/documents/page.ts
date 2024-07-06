import { defineField, defineType } from 'sanity';
import { Book } from 'lucide-react';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: Book,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'hero' }, { type: 'post-listing' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
    }),
  },
});
