const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('a', resolve('src/assets'))
      .set('c', resolve('src/components'))
      .set('v', resolve('src/views'))
      .set('r', resolve('src/request'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/less/index.less')]
    }
  }
}
