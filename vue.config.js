// 引入nodejs自带的path模块
var path = require('path');
// 导出
module.exports = {
  publicPath:  './',  //默认路径
  outputDir: 'dist',  //webpack打包输出文件夹
  assetsDir: 'static',        //public下静态资源打包目录
  indexPath: 'index.html',  //生成index.html 目录
  filenameHashing: true,   // 打包是否带有hash值
  lintOnSave: true,       
  runtimeCompiler: true,
  productionSourceMap: false,    //打包是否map
  devServer: {      //webpack微服务器
    overlay: {
      warnings: false,
      errors: true
    },
    host: 'localhost',   //地址
    port: 8080,       //端口号
    proxy: {           // 使用proxy代理跨域
      '/douban': {
        target: 'http://api.douban.com/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/douban': ''    //代理的路径
        }
      }
    } 
  },
  css: {     //css
    loaderOptions: {
      less: {
        globalVars: {
        }
      }
    }
  },
  chainWebpack: config => {     // less 预编译配置
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