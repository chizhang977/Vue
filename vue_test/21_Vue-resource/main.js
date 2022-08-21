
import Vue from 'vue'

import App from './App.vue'

import   vueResource  from 'vue-resource'//插件

Vue.use(vueResource)//vm.$http

Vue.config.productionTip = false

new Vue({
 
  el:'#app',
 
  render:createElement=>createElement('app'),

  components:{ App },

  beforeCreate(){
    Vue.prototype.$bus = this
  }
  
})
