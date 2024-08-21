import { defineField } from 'sanity';
import { Globe } from 'lucide-react';

export default defineField({
  name: 'linkExternal',
  title: 'External Link',
  type: 'object',
  icon: Globe,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
    defineField({
      name: 'newWindow',
      title: 'Open in a new window?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      label: 'label',
      url: 'url',
    },
    prepare(selection) {
      const { label, url } = selection;

      const subtitle = [];
      if (url) {
        subtitle.push(`→ ${url}`);
      }

      return {
        title: label,
        subtitle: subtitle.join(' '),
      };
    },
  },
});
