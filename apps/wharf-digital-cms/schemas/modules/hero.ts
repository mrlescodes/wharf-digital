import { defineField, defineType } from 'sanity';
import { Wallpaper } from 'lucide-react';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: Wallpaper,
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
});
