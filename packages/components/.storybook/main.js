module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-a11y', 'storybook-addon-mdx-embed', 'storybook-dark-mode/register', '@storybook/addon-controls', '@storybook/preset-scss', 'storybook-addon-themes', '@storybook/addon-mdx-gfm'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
        loader: require.resolve('ts-loader')
      }]
    }, {
      test: /\.md$/,
      use: [{
        loader: 'markdown-loader'
      }]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};