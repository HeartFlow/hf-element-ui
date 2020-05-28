const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = (_, argv) => {
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
        'hf-element-ui': path.resolve('./bin')
      }
    }
  }

  if (argv.mode === 'development') {
    // Webpack dev server (bundle analyzer not working with this config)
    config.devtool = 'eval-source-map',
    config.devServer = {
      contentBase: './example',
      overlay: true
    }
  }

  return merge(common, config)
}
