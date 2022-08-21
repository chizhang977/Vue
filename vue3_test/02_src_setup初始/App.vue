<template>

<!-- 可以没有根标签 -->
  <h1>一个人信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>性别:{{sex}}</h2>
  <button @click="sayWelcome">说话vue2配置的</button>
  <button @click="sayHello">说话</button>
  <button @click="test1">在vue2的配置中读取vue3中的数据和方法</button><br/>
  <button @click="test2">在vue3的配置中读取vue2中的数据和方法</button>
</template>

<script>
// import { h } from 'vue'

export default {
  name: 'App',
  // 测试setup，不考虑响应式
  setup(props) {
    let name = '张三'
    let age = 18

    function sayHello(){
      alert(`我叫${name},我今年${age},你好啊！`)
    }

    function test2() {
       console.log(this.sex)
        console.log(this.age)
        console.log(this.name)
        console.log(this.sayHello)
        console.log(this.sayWelcome)
    }

// 返回一个对象
    return{
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个函数(渲染函数)
    // return ()=>{return h('h1','成')}
    // return ()=>h('h1','尚硅谷')
  },



  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
    console.log(this.sex)
    console.log(this.age)
    console.log(this.name)
    console.log(this.sayHello)

  }
  },
  
}
</script>

