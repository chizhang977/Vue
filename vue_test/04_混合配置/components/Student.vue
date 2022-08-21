<template>
    <div>
         
       <h2 @click="showName">学生姓名:{{name}}</h2>
       <h2>学生性别:{{sex}}</h2>
      
    </div>
</template>

<script>

// 引入一个混合
    
    export default{
        name:'Student',
        data(){
            return{
               name:'cheng',
               sex:'男'
            }
        },
       
      
        
       
    }
</script>