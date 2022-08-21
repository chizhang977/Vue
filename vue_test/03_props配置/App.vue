<template>
  <div>
    <!-- //ref就是一个标记,跟原生的id属性一样 -->
    <Student  name="李四" :age="18" sex="女"/>
    <!-- <Student name="王老五" age="20" sex="男"/> -->
    
  </div>
</template>

<script>
  import Student from './components/Student.vue'
  export default {
    name:'App',
    components:{
      Student  
    },
    
    
  }
</script>




