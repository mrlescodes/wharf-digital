import { defineField, defineType } from "sanity";
import { Image } from "lucide-react";

export default defineType({
  name: "section.media",
  title: "Media",
  type: "object",
  icon: Image,
  fields: [
    defineField({
      name: "media",
      title: "Media",
      type: "image",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Media",
      };
    },
  },
});
