const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          ...(
            Object.entries({
              'my-pkg-custom-name': path.resolve(__dirname, '../src/index.ts'),
            }).map(([key, val]) => ({ find: key, replacement: val }))
          ),
        ],
      },
    });
  },
}
