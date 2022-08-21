const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  lintOnSave:false,//关闭语法检查

  // devServer: {//开启代理服务器,只能配置一个代理，不能控制走不走代理
  //   proxy: 'http://localhost:5001'
  // }

  // 方式二
  devServer: {
    proxy: {
      '/api': {//请求前缀
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true,//websocket
        changeOrigin: true//撒谎 用户控制请求头中的host值
      },
      '/demo': {//请求前缀
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true,//websocket
        changeOrigin: true//撒谎 用户控制请求头中的host值
      }
    }
  }
})
