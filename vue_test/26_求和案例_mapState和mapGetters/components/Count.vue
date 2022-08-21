<template>
  <div>
    <h1>当前的总和:{{sum}}</h1>
    <h1>当前求和放大10倍:{{bigSum}}</h1>
    <h3>我在{{school}},学习{{subject}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数加</button>
    <button @click="incrementWait">等一秒加</button>
  </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1
        }
    },
    methods:{
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
             this.$store.dispatch('incrementOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('incrementWait',this.n)
        }

    },
    mounted(){
        console.log('Count',this.$store)
    },
    computed:{
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // }

        // 借助mapState生成计算属性,从state中读取数据
        // ...mapState({sum:'sum',school:'school',subject:'subject'})

        ...mapState(['sum','school','subject']),

        // bigSum(){
        //     return this.$store.getters.bigSum
        // }

        // ...mapGetters({bigSum:'bigSum'})
        ...mapGetters(['bigSum'])
    }
    
}
</script>

<style>
    button{
        margin-left: 10px;
    }
</style>