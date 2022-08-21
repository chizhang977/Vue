// 该文件用户创建vuex中最为核心的store
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 应用Vuex插件
Vue.use(Vuex)

// 准备actions用户响应组件中的动作
const actions = {
    jia(context,value){//actions中的方法第一个参数为:上下文,第二个参数：传过来的值
        // console.log('actions回调执行@',a,b)
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },1000)
    }
}
// 准备mutations用户响应组件中的动作
const mutations = {
    JIA(state,value){//mutations中的第一个参数为:state,第二个为value
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }


}
// 准备state用户响应组件中的动作
const state = {
    sum:0//当前的和
}

// 创建并暴漏store
export default new Vuex.Store({
    actions,
    mutations,
    state
})