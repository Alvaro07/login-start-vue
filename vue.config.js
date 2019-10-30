module.exports = {
  publicPath: 'login-start-vue',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/styles/settings/_variables.scss";'
      }
    }
  }
}
