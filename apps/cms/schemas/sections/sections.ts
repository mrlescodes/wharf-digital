import { defineArrayMember, defineType } from "sanity";
import { Blocks } from "lucide-react";

export default defineType({
  name: "sections",
  title: "Sections",
  type: "array",
  icon: Blocks,
  of: [
    defineArrayMember({
      type: "section.accordion",
    }),
    defineArrayMember({
      type: "section.contentMedia",
    }),
    defineArrayMember({
      type: "section.content",
    }),
    defineArrayMember({
      type: "section.hero",
    }),
    defineArrayMember({
      type: "section.mediaGrid",
    }),
    defineArrayMember({
      type: "section.media",
    }),
    defineArrayMember({
      type: "section.metrics",
    }),
  ],
});
