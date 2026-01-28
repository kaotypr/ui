import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: '@kaotypr/ui',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
      },
    ],
    githubUrl: 'https://github.com/kaotypr/ui',
  };
}
