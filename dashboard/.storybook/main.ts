import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-console',
    'storybook-dark-mode',
    '@storybook/addon-designs',
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    'storybook-addon-swc',
    'storybook-css-modules',
    '@storybook/addon-toolbars'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: join(__dirname, '../vite.config.ts'),
      },
    },
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};

export default config;