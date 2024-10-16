import { defineArrayMember, defineField, defineType } from 'sanity';
import { Captions } from 'lucide-react';

export default defineType({
  name: 'layout.contentMedia',
  title: 'Content / Media',
  type: 'object',
  icon: Captions,
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
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'image',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Content / Media',
      };
    },
  },
});
