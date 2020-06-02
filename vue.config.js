const path = require('path')

// const GITHUB_REPOSITORY_NAME = 'hf-element-ui'
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  configureWebpack: {
    entry: path.resolve('./src/index.js'),
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@shared': path.resolve('./shared')
      }
    }
  }
}
