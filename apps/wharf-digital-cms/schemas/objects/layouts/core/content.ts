import { defineArrayMember, defineField, defineType } from 'sanity';
import { NotepadText } from 'lucide-react';

export default defineType({
  name: 'layout.content',
  title: 'Content',
  type: 'object',
  icon: NotepadText,
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Content',
      };
    },
  },
});
