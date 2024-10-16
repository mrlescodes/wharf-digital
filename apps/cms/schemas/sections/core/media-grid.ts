import { defineArrayMember, defineField, defineType } from "sanity";
import { LayoutGrid } from "lucide-react";

export default defineType({
  name: "section.mediaGrid",
  title: "Media Grid",
  type: "object",
  icon: LayoutGrid,
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "media",
          title: "Media",
          type: "image",
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Media Grid",
      };
    },
  },
});
