<template>
    <div class="demo">
         
       <h2 >学生姓名:{{name }}</h2>
       <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
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
        methods:{
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        }
       
      
        
       
    }
</script>
<style scoped >
    .demo{
        background-color: pink;
    }
</style>