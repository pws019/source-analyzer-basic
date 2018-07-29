const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './test-env/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.mvl$/,
        use: {
          loader: 'html-loader',
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './test-env/tpl.html'
  }), new webpack.HotModuleReplacementPlugin()],
  devtool: "source-map", // enum
  devServer: {
    contentBase: path.join(__dirname, 'test-env'),
    port: 9000,
    hot: true,
    overlay: true
  },
  resolve: {
    alias: {
      '@packages': path.resolve(__dirname, 'packages/'),
    }
  }
};