const path = require('path');

const SRC_PATH = path.join(__dirname, '../client/src');
const BUILD_PATH = path.join(__dirname, '../client/dist');

module.exports = {
  entry: path.join(SRC_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        include: SRC_PATH,
        use: {
          loader: 'eslint-loader',
          options: {
            emitError: true,
          },
        },
      },
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'airbnb'],
          },
        },
      },
      {
        test: /\.scss$/,
        include: SRC_PATH,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
