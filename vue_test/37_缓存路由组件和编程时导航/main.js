import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
    el:'#app',
    router:router,
    render:h=>h('app'),
    components:{
        App
    }
})