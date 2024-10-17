import { defineField, defineType } from "sanity";
import { Presentation } from "lucide-react";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: Presentation,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "sections",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
