module.exports = {
  transpileDependencies: [
  ],

  configureWebpack: {
    devtool: 'source-map',

    watchOptions: {
      poll: true,
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
      .end()
      .use('yaml')
      .loader('yaml-loader')
      .end();
  },

  publicPath: process.env.DEV_BUILD_PATH ? `/dev/${process.env.DEV_BUILD_PATH}/` : '/',

  pluginOptions: {
    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      enableInSFC: true,
    },
  },
};
