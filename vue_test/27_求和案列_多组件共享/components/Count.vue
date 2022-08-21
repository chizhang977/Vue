<template>
  <div>
    <h1>当前的总和:{{sum}}</h1>
    <h1>当前求和放大10倍:{{bigSum}}</h1>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数为:{{personList.length}}</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数加</button>
    <button @click="incrementWait(n)">等一秒加</button>
  </div>

</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name:'Count',
    data(){
        return{
            n:1
        }
    },
    methods:{
    
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      
        ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})

    },
    mounted(){
        console.log('Count',this.$store)
    },
    computed:{
        
        ...mapState(['sum','school','subject','personList']),

        ...mapGetters(['bigSum'])
    }
    
}
</script>

<style>
    button{
        margin-left: 10px;
    }
</style>