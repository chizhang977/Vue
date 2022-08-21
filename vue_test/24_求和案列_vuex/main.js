
import Vue from 'vue'

import App from './App.vue'

import store from './store'

Vue.config.productionTip = false



const vm = new Vue({
 
  el:'#app',
 
  render:createElement=>createElement('app'),

  components:{ App },

  beforeCreate(){
    Vue.prototype.$bus = this
  },
  store:store
  
})

