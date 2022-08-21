
import Vue from 'vue'

import App from './App.vue'

import 'animate.css'
Vue.config.productionTip = false



new Vue({
 
  el:'#app',
 
  render:createElement=>createElement('app'),

  components:{ App },
  // 安装事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})
