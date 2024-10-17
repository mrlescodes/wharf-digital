import { defineArrayMember, defineField, defineType } from "sanity";
import { Settings } from "lucide-react";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: Settings,
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        defineField({
          name: "navigationItems",
          title: "Navigation Items",
          type: "array",
          of: [
            defineArrayMember({ type: "linkInternal" }),
            defineArrayMember({ type: "linkExternal" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
