const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.jsx$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};