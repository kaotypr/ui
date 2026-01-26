import type { Preview } from '@storybook/react-vite'
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/assets/css/index.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Documentation', '*'],
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: { disable: true },
    docs: {
      canvas: {
          className: `!bg-background`,
      },
  },
    a11y: {
      test: 'todo'
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    })
  ],
};

export default preview;
