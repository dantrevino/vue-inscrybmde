'use strict';

const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV;

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: env === 'production' ? 'vue-inscrybmde.min.js' : 'vue-inscrybmde.js',
    library: 'VueInscrybMDE',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    inscrybmde: {
      commonjs: 'inscrybmde',
      commonjs2: 'inscrybmde',
      amd: 'inscrybmde',
      root: 'InscrybMDE'
    },
    'marked': 'marked'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    'inscrybmde': 'inscrybmde'
  }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
}

if (env === 'production') {
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
