const path = require('path')

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/asssets'),
        '@css': path.resolve(__dirname, './src/css'),
        '@router': path.resolve(__dirname, './src/router'),
        '@store': path.resolve(__dirname, './src/store'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@layouts': path.resolve(__dirname, './src/views/layouts'),
        '@views': path.resolve(__dirname, './src/views'),
        '@auth': path.resolve(__dirname, './src/views/auth')
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  },
  publicPath: '/boletin-noticias/'
}
