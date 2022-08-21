import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {
    incrementOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
        
    },
    incrementWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 1000);
        
    }

}
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}
const state = {
    sum:0,
    school:'尚硅谷',
    subject:'前端'
}
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
export default new Vuex.Store({
    actions,mutations,state,getters
})