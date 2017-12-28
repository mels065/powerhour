const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD_PATH = path.join(__dirname, '../build');

module.exports = merge(
  common,
  {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: BUILD_PATH,
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('DEVELOPMENT'),
      }),
    ],
  },
);
