const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./common.js')

module.exports = merge(common, {
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [[
              'component', { libraryName: 'element-ui', styleLibraryName: '~lib' }
            ]]
          }
        }
      },
      {
        test: /\.css$/,
        loader: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
  externals: {
    vue: 'vue' // User should have Vue pre-installed
  }
})
