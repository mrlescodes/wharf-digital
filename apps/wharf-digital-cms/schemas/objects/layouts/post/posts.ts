import { defineField, defineType } from 'sanity';
import { ScrollText } from 'lucide-react';

export default defineType({
  name: 'layout.posts',
  title: 'Posts',
  type: 'object',
  icon: ScrollText,
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
        title: 'Posts',
      };
    },
  },
});
