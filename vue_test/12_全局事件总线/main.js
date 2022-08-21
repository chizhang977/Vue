// 该文件是整个项目的入口文件
// 引入vue

import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false



// 创建vm
new Vue({
  /*  
      关于不同版本的Vue：
        1、vue.js与vue.runtime.xxx.js区别：
          (1).vue.js时完整版的vue，包含：核心功能+模板编译器
          (2).vue.runtime.xxx.js是运行时Vue,只包含:核心功能：没有模板解析器

        2、因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项，需要使用
          render函数接收到的createElement函数去指定具体内容  
  */
  el:'#app',
  // render函数完成了这个功能，将app组件放入到容器中
  // render: h => h(App),
  // render(createElement){
  //   return createElement('h1','你好啊')
  // },

  // render(createElement){
  //   return createElement('app')
  // },
  render:createElement=>createElement('app'),
  // template:`<h1>你好啊</h1>`,
  components:{
    App
  },
  beforeCreate(){
    Vue.prototype.$bus = this//安装全局事件总线
  }
})
