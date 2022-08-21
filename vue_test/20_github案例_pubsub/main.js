
import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false



new Vue({
 
  el:'#app',
 
  render:createElement=>createElement('app'),

  components:{ App },

  beforeCreate(){
    Vue.prototype.$bus = this
  }
  
})
