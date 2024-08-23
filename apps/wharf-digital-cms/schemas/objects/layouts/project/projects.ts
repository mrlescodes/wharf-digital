import { defineField, defineType } from 'sanity';
import { FolderKanban } from 'lucide-react';

export default defineType({
  name: 'layout.projects',
  title: 'Projects',
  type: 'object',
  icon: FolderKanban,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Projects',
      };
    },
  },
});
