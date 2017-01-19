//REF: https://webpack.github.io/docs/configuration.html
// https://vuejs-templates.github.io/webpack/structure.html
var path = require('path');
var webpack = require('webpack');
//DEV TOOLS

const validator = require('webpack-validator'); //Validator dont know "rules" option, disabling for now

module.exports = {

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',//'/spa/build/',
    filename: 'bundle.js'
  },

  //Check
    //https://vue-loader.vuejs.org/en/configurations/asset-url.html
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

  resolve: {
    alias: {
     // 'src': path.resolve(__dirname, './src'),
      //'assets': path.resolve(__dirname, './src/assets/'),
      //'components': path.resolve(__dirname, './src/vue-components'),
      'vue$': 'vue/dist/vue.common.js'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:8080/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug' //enable on dev,
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
  // http://vue-loader.vuejs.org/en/workflow/production.html
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