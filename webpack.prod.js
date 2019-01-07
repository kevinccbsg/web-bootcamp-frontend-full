const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    detail: path.join(__dirname, 'src', 'detail.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['app'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({  // Also generate a detail.html
      filename: 'detail.html',
      template: 'src/assets/detail.html',
      chunks: ['detail'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /es/),
  ],
};