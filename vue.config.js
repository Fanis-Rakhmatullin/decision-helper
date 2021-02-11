/* eslint-disable */
module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        prependData: `~@/assets/styles/mixins.scss"`
      },
      scss: {
        prependData: `@import "~@/assets/styles/mixins.scss";`
      },
    },
  },
}
