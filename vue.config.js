module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/global.scss";`
      }
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
};
