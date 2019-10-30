module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~@/styles/settings/variables.scss"; 
        @import "~@/styles/settings/mixins.scss"
        `
      }
    }
  }
};
