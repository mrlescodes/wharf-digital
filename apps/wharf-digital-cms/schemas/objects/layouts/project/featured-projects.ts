import { defineArrayMember, defineField, defineType } from 'sanity';
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
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
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
