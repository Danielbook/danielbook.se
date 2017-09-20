const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './dev/js/index.js',
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            includePaths: ['src/img/slides']
          }
        }]
      }
    ]
  },
  output: {
    filename: 'js/bundle.min.js',
    path: path.resolve(__dirname, 'src')
  },
  resolve: {
    alias: {
      'assets': path.resolve('src/')
    }
  }
};
