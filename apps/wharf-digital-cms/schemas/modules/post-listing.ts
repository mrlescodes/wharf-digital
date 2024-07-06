import { defineField, defineType } from 'sanity';
import { ScrollText } from 'lucide-react';

export default defineType({
  name: 'post-listing',
  title: 'Post Listing',
  type: 'object',
  icon: ScrollText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
});
