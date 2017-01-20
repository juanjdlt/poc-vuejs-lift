/*
Config Options: https://webpack.github.io/docs/configuration.html
File and folders organization for dev and production env, 
  example: https://github.com/villeristi/vue.js-starter-template/tree/master/webpack
  
Configurations for Production environment:
  http://vue-loader.vuejs.org/en/workflow/production.html
  https://github.com/vuejs-templates/webpack/blob/master/template/build/webpack.prod.conf.js
  https://github.com/villeristi/vue.js-starter-template/blob/master/webpack/production.js

*/

var path = require('path');
var webpack = require('webpack');

const validator = require('webpack-validator'); //Validator dont know "rules" option, disabling for now

module.exports = {

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  //rules == loaders (in older versions of webpack)
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:8080/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}