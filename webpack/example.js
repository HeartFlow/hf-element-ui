const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = merge(common, {
  entry: './example/main.js',
  output: {
    path: path.resolve('./example/dist/'),
    filename: 'example.bundle.js'
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
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve('./example'),
      'hf-element-ui': path.resolve('./bin')
    }
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './example',
    overlay: true
  }
})
