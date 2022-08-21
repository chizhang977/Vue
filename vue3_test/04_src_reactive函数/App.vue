<template>

<!-- 可以没有根标签 -->
  <h1>一个人信息</h1>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>工作:{{person.obj.type}}</h2>
  <h2>薪水:{{person.obj.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
  <h2>测试的数据{{person.obj.a.b.c}}</h2>
  <h2>爱好:{{person.hobby}}</h2>
</template>

<script>
import {reactive} from 'vue'
export default {
  
  name: 'App',
  // 测试setup，不考虑响应式
  setup() {
    

    let person =reactive({
      name:'张三',
      age:19,
      obj : reactive({
        type:'前端工程师',
        salary:'30k',
        a:{
          b:{
            c:666
          }
        }
      }),
      hobby:['抽烟','喝酒','烫头']
    }) 

   
    function changeInfo() {
      person.name = '李四'
      person.age = 48,
      person.obj.type = '后端工程师'
      person.obj.salary ='59k'
      person.obj.a.b.c = "cheng"
      person.hobby[0] = '学习'
    }
    
// 返回一个对象
    return{
      person,
      changeInfo
     
    }
  },



  
  
}
</script>

