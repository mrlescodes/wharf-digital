import { defineField, defineType } from 'sanity';
import { Settings } from 'lucide-react';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Settings,
  groups: [{ name: 'general', title: 'General', default: true }],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'general',
      validation: (rule) => rule.required(),
    }),
  ],
});
