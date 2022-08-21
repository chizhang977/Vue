<template>

<!-- 可以没有根标签 -->
  <h1>一个人信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>工作:{{job.type}}</h2>
  <h2>薪水:{{job.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// import { h } from 'vue'
import {ref} from 'vue'
export default {
  
  name: 'App',
  // 测试setup，不考虑响应式
  setup(props) {
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })

    function changeInfo() {
      // name.value = '李四'
      // age.value = 48,
      job.value.type = '后端工程师'
      job.value.salary ='59k'

      console.log(job)
    }
    
// 返回一个对象
    return{
      name,
      age,
      changeInfo,
      job
     
    }

    // 返回一个函数(渲染函数)
    // return ()=>{return h('h1','成')}
    // return ()=>h('h1','尚硅谷')
  },



  
  
}
</script>

