const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = (env, argv) => {
  var config = {
    entry: './example/index.js',
    output: {
      path: path.resolve('./example/dist/'),
      filename: 'example.bundle.js'
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
          loader: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve('./example'),
        '@root': path.resolve('./')
      }
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './example',
      overlay: true
    }
  }

  if (env && env.analyze) {
    delete config.devtool
    delete config.devServer
  }

  return merge(common(env, argv), config)
}
