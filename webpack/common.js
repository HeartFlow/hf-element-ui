const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
