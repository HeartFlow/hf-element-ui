const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')

const common = require('./common.js')

module.exports = (env, argv) => merge(common(env, argv.mode), {
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
        options: {
          presets: [['@babel/preset-env', {
            modules: false,
            targets: { ie: '11' },
            useBuiltIns: 'usage',
            corejs: 3
          }]]
        },
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
  externals: [nodeExternals()] // ignore every modules
})
