import { defineField, defineType } from 'sanity';
import { Sparkles } from 'lucide-react';

export default defineType({
  name: 'layout.hero',
  title: 'Hero',
  type: 'object',
  icon: Sparkles,
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
