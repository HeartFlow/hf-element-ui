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
    }
  }

  if (!env.analyze) {
    // wp bundle analyzer not working well with dev server, should be disabled
    config.devtool = 'eval-source-map'
    config.devServer = {
      contentBase: './example',
      overlay: true
    }
  }

  return merge(common(env, argv), config)
}
