import { defineField, defineType } from 'sanity';
import { FilePlus } from 'lucide-react';

export default defineType({
  name: 'layout.relatedProject',
  title: 'Related Project',
  type: 'object',
  icon: FilePlus,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'reference',
      to: [{ type: 'project' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Related Project',
      };
    },
  },
});
