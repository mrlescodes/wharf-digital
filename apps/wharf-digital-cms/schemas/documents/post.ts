import { defineField, defineType } from 'sanity';
import { format, parseISO } from 'date-fns';
import { Scroll } from 'lucide-react';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: Scroll,
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
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishDate: 'publishDate',
    },
    prepare: ({ title, publishDate }) => ({
      title,
      subtitle:
        publishDate &&
        `Published ${format(parseISO(publishDate), 'LLL d, yyyy')}`,
    }),
  },
  orderings: [
    {
      title: 'Publish Date (Newest)',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Publish Date (Oldest)',
      name: 'publishDateAsc',
      by: [{ field: 'publishDate', direction: 'asc' }],
    },
  ],
});
