<template>
  <div>
    <h1>当前的总和:{{$store.state.sum}}</h1>
    <h1>当前求和放大10倍:{{$store.getters.bigSum}}</h1>
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
    
}
</script>

<style>
    button{
        margin-left: 10px;
    }
</style>