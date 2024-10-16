import { defineField, defineType } from 'sanity';
import { Settings } from 'lucide-react';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headerMenu',
      title: 'Header Menu',
      type: 'reference',
      to: [{ type: 'navigation' }],
    }),
  ],
});
