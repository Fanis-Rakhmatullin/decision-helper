/* eslint-disable */
module.exports = {
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
