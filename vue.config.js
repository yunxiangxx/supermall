module.exports = {
  transpileDependencies: true,
//  配置别名
  configureWebpack:{
    //resolve解决路径上的问题
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
