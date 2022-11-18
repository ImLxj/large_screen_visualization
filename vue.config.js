const postcssPluginPx2rem = require('postcss-plugin-px2rem')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcssPluginPx2rem({
            rootValue: 80,
            propBlackList: ['border', 'min-width', 'max-width']
          })
        ]
      }
    }
  }
}
