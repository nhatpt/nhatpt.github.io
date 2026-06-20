// Single source of truth for the person. PLACEHOLDER (lorem ipsum) — replace
// every value here in the upcoming content pass. Everything the site displays
// (name, role, footer, page titles, terminal prompt) is driven from this file.
//
// `cvUrl` points to a PDF in /public, served from the site root. Replace
// public/cv/CV-placeholder.pdf with the real CV (regenerate the placeholder
// anytime with `node scripts/gen-cv-placeholder.mjs`).
export const profile = {
  name: 'Lorem Ipsum',
  handle: 'loremipsum', // used in the terminal title + prompt host
  role: 'Lorem Ipsum Dolor',
  tagline:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  cvUrl: '/cv/CV-placeholder.pdf',
  cvFileName: 'CV-placeholder.pdf',
  about: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
}

export const contact = [
  { label: 'Email', value: 'lorem@example.com', href: 'mailto:lorem@example.com', external: false },
  { label: 'GitHub', value: 'github.com/lorem', href: 'https://github.com/lorem', external: true },
  { label: 'LinkedIn', value: 'in/lorem', href: 'https://linkedin.com/in/lorem', external: true },
]
