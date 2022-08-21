<template>
  <div>
    <!-- //ref就是一个标记,跟原生的id属性一样 -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
  import School from './components/School'

  export default {
    name:'App',
    components:{
      School
      
    },
    data(){
      return{
        msg:'欢迎学习Vue!'
      }
    },
    methods:{
      showDOM(){
        console.log(this.$refs.title)//真实的DOM元素
        console.log(this.$refs.btn)//真实的DOM元素
        console.log(this.$refs.sch)//school组建的实例对象
      }
    }
  }
</script>




