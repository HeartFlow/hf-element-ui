const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

module.exports = mode => {
  var config = {
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
    plugins: [new VueLoaderPlugin()]
  }
  if (mode === 'production') {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.resolve(__dirname, '../report.html'),
      })
    )
  }
  return config
}
