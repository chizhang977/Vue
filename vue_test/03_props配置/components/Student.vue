<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>姓名:{{name}}</h2>
        <h2>性别:{{sex}}</h2>
        <h2>年龄:{{myAge+1}}</h2>
        <button @click="updateAge">点我修改年龄</button>
        
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            console.log(this)
            return{
                msg:'我是一个学生',
                myAge:this.age 
            }
        },
        methods:{
            updateAge(){
                this.myAge++
            }
        },
        props:['name','sex','age','phone']//简单声明接受,优先级更高
        // 接受同时对数据类型进行限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }


        // 接受的同时对数据进行：类型的限制+默认值的指定+必要性的限制
        // props:{
        //     name:{
        //         type:String,
        //         required:true
        //     },
        //     age:{
        //         type:Number,
        //         default:99
        //     },
        //     sex:{
        //         type:String,
        //         required:true
        //     }
        // }
    }
</script>