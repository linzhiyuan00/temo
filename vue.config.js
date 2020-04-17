var path = require('path');


module.exports = {
  publicPath:  './',
  outputDir: 'dist',  //输出目录
  assetsDir: '',            //public下静态资源打包目录
  indexPath: 'index.html',  //生成index.html 目录
  filenameHashing: true,   // 打包是否带有hash值
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: false,    //打包是否map
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    host: 'localhost',
    port: 8080,
    proxy: {
      '/douban': {
        target: 'http://api.douban.com/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/douban': ''    //代理的路径
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    } 
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
        }
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  }
}
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 需要全局导入的less
        path.resolve(__dirname, './src/common/common.less')
      ]
    })
}