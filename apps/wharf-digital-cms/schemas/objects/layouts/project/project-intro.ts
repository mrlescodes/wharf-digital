import { defineField, defineType } from 'sanity';
import { ListStart } from 'lucide-react';

export default defineType({
  name: 'layout.projectIntro',
  title: 'Project Intro',
  type: 'object',
  icon: ListStart,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Project Intro',
      };
    },
  },
});
