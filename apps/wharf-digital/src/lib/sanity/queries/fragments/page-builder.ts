import { defineQuery } from 'groq';

// @sanity-typegen-ignore
export const pageBuilderQuery = defineQuery(`
    ...,
    _type == 'layout.posts' => {
        "posts": *[_type == "post" && defined(slug)],
    },
    _type == 'layout.featuredProjects' => {
        projects[]->{
            _id,
            _type,
            title,
            slug,
        }
    },
    _type == 'layout.projects' => {
        "projects": *[_type == "project" && defined(slug)]{
            _id,
            _type,
            title,
            slug,
        },
    },
    _type == 'layout.relatedProject' => {
        project->{
            _id,
            _type,
            title,
            slug,
        }
    },
`);
