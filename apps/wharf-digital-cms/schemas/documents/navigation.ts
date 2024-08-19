import { defineField, defineType } from 'sanity';
import { SquareMenu } from 'lucide-react';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: SquareMenu,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
});
