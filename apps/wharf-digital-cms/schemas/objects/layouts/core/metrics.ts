import { defineArrayMember, defineField, defineType } from 'sanity';
import { CirclePercent } from 'lucide-react';

export default defineType({
  name: 'layout.metrics',
  title: 'Metrics',
  type: 'object',
  icon: CirclePercent,
  fields: [
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'metric',
          title: 'Metric',
          type: 'object',
          icon: false,
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Metrics',
      };
    },
  },
});
