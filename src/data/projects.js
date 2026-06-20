// Projects power both the home cards and the per-project detail pages.
// `slug` is the URL segment (/projects/:slug). The list fields (title, summary,
// tags) show on the card; the detail fields render on ProjectDetailView.
// PLACEHOLDER (lorem ipsum) — replace in the content pass. Keep slugs URL-safe.
export const projects = [
  {
    slug: 'project-1',
    title: 'Lorem Ipsum Dolor',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    year: '20XX',
    role: 'Lorem Ipsum',
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    ],
    stack: ['Lorem', 'Ipsum', 'Dolor', 'Sit'],
  },
  {
    slug: 'project-2',
    title: 'Consectetur Adipiscing',
    summary:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
    tags: ['Sit', 'Amet', 'Consectetur'],
    year: '20XX',
    role: 'Lorem Ipsum',
    overview:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    highlights: [
      'Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    ],
    stack: ['Adipiscing', 'Elit', 'Sed', 'Tempor'],
  },
  {
    slug: 'project-3',
    title: 'Eiusmod Tempor Incididunt',
    summary:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
    tags: ['Incididunt', 'Labore', 'Dolore'],
    year: '20XX',
    role: 'Lorem Ipsum',
    overview:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    highlights: [
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate.',
      'Velit esse quam nihil molestiae consequatur vel illum.',
    ],
    stack: ['Magna', 'Aliqua', 'Veniam', 'Quis'],
  },
]

export function findProject(slug) {
  return projects.find((p) => p.slug === slug)
}
