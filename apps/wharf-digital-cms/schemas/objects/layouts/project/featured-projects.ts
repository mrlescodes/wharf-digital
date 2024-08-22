import { defineField, defineType } from 'sanity';
import { Presentation } from 'lucide-react';

export default defineType({
  name: 'layout.featuredProjects',
  title: 'Featured Projects',
  type: 'object',
  icon: Presentation,
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
        title: 'Featured Projects',
      };
    },
  },
});
