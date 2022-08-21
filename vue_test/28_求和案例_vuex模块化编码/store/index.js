import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'
Vue.use(Vuex)

const personAbout  = {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')==0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
            localStorage.setItem('person',JSON.stringify(value))
        }
    },
    state:{
        personList :[
            {id:'1001',name:'张三'}
        ]
    },
    getters:{
        fristPersonName(state){
           return state.personList[0].name
        }
    }
}

const countAbout = {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
    
}


export default new Vuex.Store({
   modules:{countAbout,personAbout}
})