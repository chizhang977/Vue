<template>
  <div>
      <School/>
      <Student name="张三" sex="男" :age='20'/>
  </div>
</template>

<script>
   import School from './components/School.vue'
  import Student from './components/Student.vue'
 
  export default {
    name:'App',
    components:{
      Student ,School 
    },   
  }
</script>




