import { defineArrayMember, defineType } from 'sanity';
import { Blocks } from 'lucide-react';

export default defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  icon: Blocks,
  of: [
    // Core
    defineArrayMember({
      type: 'layout.accordion',
    }),
    defineArrayMember({
      type: 'layout.contentMedia',
    }),
    defineArrayMember({
      type: 'layout.content',
    }),
    defineArrayMember({
      type: 'layout.hero',
    }),
    defineArrayMember({
      type: 'layout.mediaGrid',
    }),
    defineArrayMember({
      type: 'layout.media',
    }),
    defineArrayMember({
      type: 'layout.metrics',
    }),

    // Post
    defineArrayMember({
      type: 'layout.posts',
    }),

    // Project
    defineArrayMember({
      type: 'layout.featuredProjects',
    }),
    defineArrayMember({
      type: 'layout.projectIntro',
    }),
    defineArrayMember({
      type: 'layout.projects',
    }),
    defineArrayMember({
      type: 'layout.relatedProject',
    }),
  ],
});
