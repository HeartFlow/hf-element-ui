const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./common.js')

module.exports = (_, argv) => merge(common(argv.mode), {
  entry: './src/index.js',
  output: {
    path: path.resolve('./bin'),
    filename: 'index.js',
    library: 'hf-element-ui',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'index.css' })
  ],
  externals: {
    vue: 'vue',
    'element-ui': 'element-ui'
  }
})
