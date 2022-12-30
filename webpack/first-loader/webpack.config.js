const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          './loaders/pitch-loader.js',
          './loaders/log-loader.js',
          {
            loader: './loaders/clean-log-loader/',
            options: {
              level: 'warn'
            }
          },
          './loaders/sync-loader.js',
          './loaders/async-loader.js',
          './loaders/log-loader.js',
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      },
      {
        test: /\.webp$/,
        use: [
          './loaders/raw-loader.js',
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
  ],
  optimization: {
    usedExports: true,
  },
  devtool: 'cheap-module-source-map',
}