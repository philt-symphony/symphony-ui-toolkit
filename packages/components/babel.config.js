/**
 * This file is used by both
 * Jest and Storybook.
 */
module.exports = {
  plugins: [
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/transform-runtime', { regenerator: true }],
  ],
  presets: [
    [['@babel/preset-env', {targets: {node: 'current'}}]],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
